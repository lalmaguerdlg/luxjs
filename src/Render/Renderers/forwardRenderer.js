import { gl, webgl } from '../webgl'
import { MeshRenderer } from '../Components/meshRenderer'
import { RenderGroups } from './renderGroups'
import { Camera } from '../camera';


export class ForwardRenderer {
    constructor(){
        this.currentMaterial = undefined;
        this.currentShader = undefined;
        this.defaultCamera = new Camera;

        this.renderGroups = new RenderGroups();
    }

    render(scene) {
        let camera = this.defaultCamera;
        if (scene.cameras.length > 0)
            camera = scene.cameras[0];
        
        this._setupGroups(scene);

        webgl.setClearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        for (let mr of this.renderGroups.unlit) {
            this._renderUnlit(mr, camera);
        }

        for(let light of scene.lights) {
            for (let mr of this.renderGroups.lit) {
                this._renderLit(mr, camera, light);
            }
        }

        for (let mr of this.renderGroups.translucent) {
            this._renderTranslucent(mr, camera);
        }

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
        if(mr.gameObject.active){
            mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
            this._useMaterial(mr.material);
            mr.render();
        }
    }

    _renderLit(mr, camera, light) {
        if (mr.gameObject.active) {
            mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
            mr.material.viewPos = camera.transform.position;
            mr.material.light = light;
            this._useMaterial(mr.material);
            mr.render();
        }
    }

    _renderTranslucent(mr, camera) {
        if (mr.gameObject.active) {
            mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
            this._useMaterial(mr.material);
            mr.render();
        }
    }

    
}