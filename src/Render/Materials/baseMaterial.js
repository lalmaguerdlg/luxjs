//import { Shader } from './shader'
import { gl } from '../webgl'
import { RM } from '../../Core/resourceManager'
import { mat4 } from 'gl-matrix'

export let MaterialTag = {
    'none': 0,
    'unlit': 1,
    'lit': 2,
    'translucent': 3,
    'postprocess': 4,
}

Object.freeze(MaterialTag);

export class BaseMaterial {
    constructor(shader, vargs) {
        let args = vargs || {};
        this.shader = shader;
        this.drawMode = args['drawMode'] || gl.TRIANGLES;
        this.culling = args['culling'] || { enable: false, mode: gl.BACK };
        this.depthTest = args['depthTest'] || true;
        this.tag = args['tag'] || MaterialTag.none;
        this.uniformType = gl.FLOAT;

        this.mModel;
        this.mView;
        this.mPerspective;
    }

    setup(){

        if(this.depthTest) gl.enable(gl.DEPTH_TEST);
        else gl.disable(gl.DEPTH_TEST);
        if(this.culling.enable){
            gl.enable(gl.CULL_FACE);
            gl.cullFace(this.culling.mode);
        }else{
            gl.disable(gl.CULL_FACE);
        }
            
    }

    setMatrices(mModel, mView, mPerspective){
        this.mModel = mModel;
        this.mView = mView;
        this.mPerspective = mPerspective;
        if(this.tag == MaterialTag.lit ||
            this.tag == MaterialTag.translucent) {
            if(!this.mNormal) this.mNormal = mat4.create();
            lux.mat4.invert(this.mNormal, mModel);
            lux.mat4.transpose(this.mNormal, this.mNormal);
        }
    }

    update(){ 
        this.shader.setMatrixUniforms(this.mModel, this.mView, this.mPerspective);
        if(this.tag == MaterialTag.lit ||
            this.tag == MaterialTag.translucent) {
            if(!this.mNormal) this.mNormal = mat4.create();
            this.shader.setMatrix('u_mNormal', this.mNormal);
        }
    }

    use(){
        if(!this.shader.binded){
            RM.bindShader(this.shader);
            this.setup();
        }
        this.update();
    }
}
