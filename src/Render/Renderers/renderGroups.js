import { MeshRenderer } from "../Components/meshRenderer";
import { MaterialTag } from "../Materials/baseMaterial";

export class RenderGroups {
    constructor(){
        this.unlit = [];
        this.lit = [];
        this.translucent = [];
    }

    add(meshRenderer) {
        if( !meshRenderer instanceof MeshRenderer) return;

        switch (meshRenderer.material.tag) {
            case MaterialTag.none :
                this.unlit.push(meshRenderer);
                break;
            case MaterialTag.unlit:
                this.unlit.push(meshRenderer);
                break;
            case MaterialTag.lit:
                this.lit.push(meshRenderer);
                break;
            case MaterialTag.translucent:
                this.translucent.push(meshRenderer);
                break;
            default:
                this.unlit.push(meshRenderer);
                break;
        }
    }
}