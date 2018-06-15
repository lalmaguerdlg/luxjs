import { RenderComponent } from "../../Core/component";
import { Mesh } from "../Geometry/mesh";
import { BaseMaterial } from "../Materials/baseMaterial";

export class MeshRenderer extends RenderComponent {
    mesh : Mesh;
    material : BaseMaterial;

    constructor(mesh, material){
        super();
        this.mesh = mesh;
        this.material = material;
    }

    clone() : MeshRenderer {
        let cloned = new (<any>this).constructor();
        cloned = (<any>Object).assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        cloned.material = new (<any>this.material).constructor({});
        cloned.material = (<any>Object).assign(cloned.material, this.material);
        return cloned;
    }

    render() : void {
        this.mesh.render(this.material.drawMode);
    }
}