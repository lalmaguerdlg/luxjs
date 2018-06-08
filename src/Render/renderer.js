
export class Renderer {
    constructor(){
        this.shaderInUse = null;
        this.meshInUse = null;
        this.sceneCamera = undefined;
        this.renderQueue = [];
    }

    render(scene) {
        for (let go of scene.gameObjects) {
            let meshRenderers = go.getComponents('MeshRenderer');
            if ( meshRenderers ) {
                this.renderQueue = meshRenderers;
            }
        }

        for(let meshRenderer of this.renderQueue){

            meshRenderer.material.setMatrices(mModel, mView, mPerspective);

            // TODO: TERMINAR LA LOGICA PARA RENDERIZAR LOS MESH RENDERERS

            /*if(){

            }*/


            let result = meshRenderer.use();


            if(result) {
                if(this.shaderInUse != meshRenderer.shader) {
                    this.shaderInUse.unbind();
                }
                this.shaderInUse = meshRenderer.shader;
                if (this.currentShader != shader) {
                    if (this.currentShader)
                        this.currentShader.unbind();
                    this.currentShader = shader;
                    this.currentShader.bind();
                }
            }
        }
    }
}