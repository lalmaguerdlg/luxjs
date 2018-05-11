//import { Shader } from './shader'
import { gl } from '../webgl'
import { RM } from '../../Core/resourceManager'

export let MaterialTag = {
    'none': 0,
    'unlit': 1,
    'lit': 2,
    'translucent': 3
}

Object.freeze(MaterialTag);

export class BaseMaterial {
    constructor(shader, vargs) {
        let args = vargs || {};
        this.shader = shader;
        this.drawMode = args['drawMode'] || gl.TRIANGLES;
        this.cullMode = args['cullMode'] || gl.BACK;
        this.tag = args['tag'] || MaterialTag.none;
        this.uniformType = gl.FLOAT;
    }

    setup(){
        gl.cullFace(this.cullMode);
    }

    updateMatrix(mModel, mView, mPerspective){
        this.shader.setMatrixUniforms(mModel, mView, mPerspective);
    }

    use(){
        RM.bindShader(this.shader);
        //this.setup();
    }
}
