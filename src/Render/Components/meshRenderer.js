import { RenderComponent } from "../../Core/component";

export class MeshRenderer extends RenderComponent{
    constructor(mesh, material){
        super();
        this.mesh = mesh;
        this.material = material;
    }

    clone() {
        let cloned = new this.constructor();
        cloned = Object.assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        cloned.material = new this.material.constructor();
        cloned.material = Object.assign(cloned.material, this.material);
        return cloned;
    }

    render(){
        this.mesh.render(this.material.drawMode);
    }
}