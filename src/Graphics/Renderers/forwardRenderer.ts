import { gl, webgl, Viewport } from '../webgl'
import { MeshRenderer } from '../Components/meshRenderer'
import { RenderGroups } from './renderGroups'
import { Camera } from '../camera';
import { TexturePresets } from '../Textures/texture'
import { Framebuffer, AttachmentType } from '../Textures/framebuffer';
import { Geometry } from '../Geometry/geometry';
import { HDRMaterial } from '../Materials/Post Process/hdrMaterial';
import { RenderBufferFormat } from '../Textures/renderbuffer';
import { BaseMaterial } from '../Materials/baseMaterial';
import { Shader } from '../shader';
import { Scene } from '../../Core/scene';
import { PointLight } from '../Lights/pointLight';
import { PhongMaterial } from '../Materials/phongMaterial';


export class ForwardRenderer {

    private currentMaterial ?: BaseMaterial;
    private currentShader ?: Shader;
    defaultCamera : Camera;

    private renderGroups : RenderGroups
    private hdr : { fbo : Framebuffer }
    private screenQuad : MeshRenderer
    private msaa : { enabled : boolean, samples : number, fbo ?: Framebuffer }

    private _onWindowResize: (viewport: Viewport) => void

    constructor(){
        this.defaultCamera = new Camera;
        this.renderGroups = new RenderGroups();

        this._configureHDR();

        let hdrMaterial = new HDRMaterial();
        let quad = Geometry.Quad(2.0);
        this.screenQuad = new MeshRenderer(quad, hdrMaterial);


        this.msaa = {
            enabled: false,
            samples: 4,
            fbo: undefined,
        }
        this._configureMSAA();

        let self = this;
        this._onWindowResize = (viewport: Viewport) => {
            self._configureHDR();
            self._configureMSAA();
        }

        webgl.onResizeCallback = this._onWindowResize;
    }

    setMSAA(samples : number) : void {
        if (samples <= 1) {
            this.msaa.enabled = false;
        }
        else {
            this.msaa.samples = samples;
            if (this.msaa.samples > 8)
                this.msaa.samples = 8;
            this.msaa.enabled = true;
        }

        this._configureMSAA();
    }

    render(scene : Scene) : void {
        let camera = this.defaultCamera;
        if (scene.cameras.length > 0)
            camera = scene.cameras[0];
        
        this._setupGroups(scene);

        if(this.msaa.enabled){
            this.msaa.fbo!.bind();
        }
        else{
            this.hdr.fbo!.bind();
        }

        webgl.setClearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        let firstPass = true;

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LESS);
        gl.disable(gl.BLEND);

        for (let mr of this.renderGroups.unlit) {
            if(mr.gameObject!.active && mr.active) {
                this._renderUnlit(mr, camera);
            }
        }

        for(let light of scene.lights) {

            if(!firstPass){
                gl.enable(gl.BLEND);
                //gl.disable(gl.DEPTH_TEST);
                gl.blendFunc(gl.ONE, gl.ONE);
                gl.depthFunc(gl.EQUAL);
            }

            for (let mr of this.renderGroups.lit) {
                if(mr.gameObject!.active && mr.active) {
                    this._renderLit(mr, camera, light);
                }
            }

            for (let mr of this.renderGroups.translucent) {
                if(mr.gameObject!.active && mr.active) {
                    this._renderTranslucent(mr, camera);
                }
            }
            
            if(firstPass) firstPass = false;
        }

        if (this.msaa.enabled) {
            this.msaa.fbo!.unbind();
            this.msaa.fbo!.blit(this.hdr.fbo, gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT, gl.NEAREST);    
        }
        else {
            this.hdr.fbo!.unbind();
        }
        

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LESS);
        gl.disable(gl.BLEND);
        webgl.setClearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        
        (this.screenQuad.material as HDRMaterial).exposure = camera.exposure;
        this._useMaterial(this.screenQuad.material);
        this.hdr.fbo!.attachments.color[0].use(0);
        this.screenQuad.render();

    }

    private _configureMSAA() : void {
        if (this.msaa.enabled) {
            if (this.msaa.fbo) this.msaa.fbo.dispose();
            this.msaa.fbo = new Framebuffer(webgl.viewport.width, webgl.viewport.height);
            this.msaa.fbo.addColor(AttachmentType.RENDERBUFFER, new RenderBufferFormat(gl.RGBA16F, true, this.msaa.samples));
            this.msaa.fbo.addDepth(AttachmentType.RENDERBUFFER, new RenderBufferFormat(gl.DEPTH_COMPONENT24, true, this.msaa.samples))
        }
    }

    private _configureHDR() : void {
        let fbFormat = TexturePresets.FB_HDR_COLOR();
        
        if(this.hdr) {
            if (this.hdr.fbo) this.hdr.fbo.dispose();
        }
        this.hdr = { fbo: new Framebuffer(webgl.viewport.width, webgl.viewport.height) }
        this.hdr.fbo.addColor(AttachmentType.TEXTURE, fbFormat);
        this.hdr.fbo.addDepth(AttachmentType.TEXTURE);
    }

    private _setupGroups(scene : Scene) : void {
        this.renderGroups = new RenderGroups();
        for (let go of scene.gameObjects) {
            let meshRenderers = go.getComponents<MeshRenderer>(MeshRenderer);
            for (let mr of meshRenderers) {
                this.renderGroups.add(mr);
            }
        }
    }

    private _useShader(shader : Shader) : void {
        if(this.currentShader != shader) {
            if(this.currentShader) this.currentShader.unbind();
            this.currentShader = shader;
            this.currentShader.bind();
        }
    }

    private _useMaterial(material : BaseMaterial) : void {
        if(this.currentMaterial != material) {
            this.currentMaterial = material;
            this._useShader(this.currentMaterial.shader);
            this.currentMaterial.setup();
        }
        this.currentMaterial.update();
    }

    private _renderUnlit(mr : MeshRenderer, camera : Camera) : void {
        mr.material.setMatrices(mr.transform!.toWorldMatrix(), camera.mView, camera.mPerspective);
        this._useMaterial(mr.material);
        mr.render();
    }

    private _renderLit(mr : MeshRenderer, camera : Camera, light : PointLight) : void {
        mr.material.setMatrices(mr.transform!.toWorldMatrix(), camera.mView, camera.mPerspective);
        (mr.material as PhongMaterial).viewPos = camera.transform.position;
        (mr.material as PhongMaterial).light = light;
        this._useMaterial(mr.material);
        mr.render();
    }

    private _renderTranslucent(mr : MeshRenderer, camera : Camera) : void {
        mr.material.setMatrices(mr.transform!.toWorldMatrix(), camera.mView, camera.mPerspective);
        this._useMaterial(mr.material);
        mr.render();
    }

}