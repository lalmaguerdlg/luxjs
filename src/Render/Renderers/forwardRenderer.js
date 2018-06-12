import { gl, webgl } from '../webgl'
import { MeshRenderer } from '../Components/meshRenderer'
import { RenderGroups } from './renderGroups'
import { Camera } from '../camera';
import { TexturePresets } from '../Textures/texture'
import { Framebuffer, AttachmentType } from '../Textures/framebuffer';
import { Geometry } from '../Geometry/geometry';
import { HDRMaterial } from '../Materials/Post Process/hdrMaterial';
import { RenderBufferFormat } from '../Textures/renderbuffer';


export class ForwardRenderer {
    constructor(){
        this.currentMaterial = undefined;
        this.currentShader = undefined;
        this.defaultCamera = new Camera;

        this.renderGroups = new RenderGroups();

        this.msaa = {
            enabled: true,
            samples: 4,
            fbo: undefined,
        }

        if (this.msaa.enabled) {
            this.msaa.fbo = new Framebuffer(webgl.viewport.width, webgl.viewport.height);
            this.msaa.fbo.addColor(AttachmentType.RENDERBUFFER, new RenderBufferFormat(gl.RGBA8, true, this.msaa.samples));
            this.msaa.fbo.addDepth(AttachmentType.RENDERBUFFER, new RenderBufferFormat(gl.DEPTH_COMPONENT24, true, this.msaa.samples))
        }

        this.mainFBO = new Framebuffer(webgl.viewport.width, webgl.viewport.height);
        let fbFormat = TexturePresets.FB_HDR_COLOR();
        this.mainFBO.addColor(AttachmentType.TEXTURE, fbFormat);
        this.mainFBO.addDepth(AttachmentType.TEXTURE);

        let hdrMaterial = new HDRMaterial();
        let quad = new Geometry.Quad(2.0);

        this.screenQuad = new MeshRenderer(quad, hdrMaterial);

        let self = this;
        function _onWindowResize(){
            if(self.mainFBO) self.mainFBO.dispose();
            self.mainFBO = new Framebuffer(webgl.viewport.width, webgl.viewport.height);
            
            let fbFormat = lux.TexturePresets.FB_HDR_COLOR();
        
            self.mainFBO.addColor(AttachmentType.TEXTURE, fbFormat);
            self.mainFBO.addDepth(AttachmentType.TEXTURE);
        }

        webgl.onResizeCallback = _onWindowResize;
    }

    

    render(scene) {
        let camera = this.defaultCamera;
        if (scene.cameras.length > 0)
            camera = scene.cameras[0];
        
        this._setupGroups(scene);

        this.mainFBO.bind();

        webgl.setClearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        let firstPass = true;

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LESS);
        gl.disable(gl.BLEND);

        for (let mr of this.renderGroups.unlit) {
            if(mr.gameObject.active && mr.active) {
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
                if(mr.gameObject.active && mr.active) {
                    this._renderLit(mr, camera, light);
                }
            }

            for (let mr of this.renderGroups.translucent) {
                if(mr.gameObject.active && mr.active) {
                    this._renderTranslucent(mr, camera);
                }
            }
            
            if(firstPass) firstPass = false;
        }

        this.mainFBO.unbind();

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LESS);
        gl.disable(gl.BLEND);
        webgl.setClearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        
        this.screenQuad.material.exposure = camera.exposure;
        this._useMaterial(this.screenQuad.material);
        this.mainFBO.textures.color[0].use(0);
        this.screenQuad.render();

    }

    _setupGroups(scene) {
        this.renderGroups = new RenderGroups();
        for (let go of scene.gameObjects) {
            let meshRenderers = go.getComponents(MeshRenderer);
            for (let mr of meshRenderers) {
                this.renderGroups.add(mr);
            }
        }
    }

    _useShader(shader) {
        if(this.currentShader != shader) {
            if(this.currentShader) this.currentShader.unbind();
            this.currentShader = shader;
            this.currentShader.bind();
        }
    }

    _useMaterial(material){
        if(this.currentMaterial != material) {
            this.currentMaterial = material;
            this._useShader(this.currentMaterial.shader);
            this.currentMaterial.setup();
        }
        this.currentMaterial.update();
    }

    _renderUnlit(mr, camera){
        mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
        this._useMaterial(mr.material);
        mr.render();
    }

    _renderLit(mr, camera, light) {
        mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
        mr.material.viewPos = camera.transform.position;
        mr.material.light = light;
        this._useMaterial(mr.material);
        mr.render();
    }

    _renderTranslucent(mr, camera) {
        mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
        this._useMaterial(mr.material);
        mr.render();
    }

}