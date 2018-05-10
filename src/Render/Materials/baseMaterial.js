//import { Shader } from './shader'
import { gl } from './webgl'


export class BaseMaterial {
    constructor(shader, vargs) {
        let args = vargs || {};
        this.shader = shader;
        this.drawMode = args['drawMode'] || gl.TRIANGLES;
        this.cullMode = args['cullMode'] || gl.BACK;
    }

    setup(){
        gl.cullFace(this.cullMode);
    }

    use(){
        this.setup();
        this.shader.bind();
    }
}
