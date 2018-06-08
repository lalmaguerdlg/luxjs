import { Component } from "../../Core/component";

export class MeshRenderer extends Component{
    constructor(mesh, material){
        super();
        this.mesh = mesh;
        this.material = material;
    }

    render(){
        this.mesh.render(this.material.drawMode);
    }
}