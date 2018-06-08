import { gl, renderer } from './webgl'
import { mat4 } from 'gl-matrix'
import { MeshRenderer } from './Components/meshRenderer'

export class RenderSystem {
    constructor(){
        this.currentMaterial = undefined;
        this.currentShader = undefined;
        this.sceneCamera = undefined;

        this.renderQueue = [];
    }

    useShader(shader) {
        if(this.currentShader != shader) {
            if(this.currentShader) this.currentShader.unbind();
            this.currentShader = shader;
            this.currentShader.bind();
        }
    }

    useMaterial(material){
        if(this.currentMaterial != material) {
            this.currentMaterial = material;
            this.useShader(this.currentMaterial.shader);
            this.currentMaterial.setup();
        }
        this.currentMaterial.update();
    }

    render(scene) {
        if(scene.cameras.length > 0)
            this.sceneCamera = scene.cameras[0];
        this.renderQueue = [];
        for (let go of scene.gameObjects) {
            let meshRenderers = go.getComponents(MeshRenderer.name);
            if ( meshRenderers.length > 0 ) {
                this.renderQueue = this.renderQueue.concat(meshRenderers);
            }
        }

        lux.renderer.setClearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        for(let mr of this.renderQueue) { // Mesh Renderers
            if(mr.gameObject.active) {
                let mWorld = mr.transform.toWorldMatrix();
                mr.material.setMatrices(mWorld, this.sceneCamera.mView, this.sceneCamera.mPerspective);
                this.useMaterial(mr.material);
                mr.render();
            }
        }
    }
}