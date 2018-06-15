import { MeshRenderer } from "../Components/meshRenderer";
import { MaterialTag } from "../Materials/baseMaterial";

export class RenderGroups {

    unlit: MeshRenderer[] = []
    lit: MeshRenderer[] = []
    translucent: MeshRenderer[] = []

    constructor(){ }

    add(meshRenderer : MeshRenderer) {
        switch (meshRenderer.material.tag) {
            case MaterialTag.none:
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