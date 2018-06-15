//import { Shader } from './shader'
import { gl } from '../webgl'
import { RM } from '../../Core/resourceManager'
import { mat4 } from 'gl-matrix'
import { Shader } from '../shader';

export enum MaterialTag {
    none,
    unlit,
    lit,
    translucent,
    postprocess,
}

export enum CullingMode {
    none,
    back = gl.BACK,
    front = gl.FRONT,
}

export interface BaseMaterialArgs {
    drawMode ?: number
    culling ?: CullingMode
    depthTest ?: boolean;
    tag ?: MaterialTag
}

export class BaseMaterial {

    shader : Shader;
    drawMode : number = gl.TRIANGLES
    culling : CullingMode = CullingMode.none
    depthTest : boolean = true
    tag : MaterialTag = MaterialTag.none
    uniformType : number = gl.FLOAT

    mModel : mat4 = mat4.create();
    mView : mat4 = mat4.create();
    mPerspective : mat4 = mat4.create();
    mNormal ?: mat4;


    constructor(shader : Shader, args ?: BaseMaterialArgs) {
        args = args || {};
        this.shader = shader;
        this.drawMode = args.drawMode || this.drawMode
        this.culling = args.culling || this.culling
        this.depthTest = args.depthTest || this.depthTest;
        this.tag = args.tag || this.tag;
    }

    setup() : void {
        if(this.depthTest) gl.enable(gl.DEPTH_TEST);
        else gl.disable(gl.DEPTH_TEST);
        if(this.culling != CullingMode.none){
            gl.enable(gl.CULL_FACE);
            gl.cullFace(this.culling);
        }else{
            gl.disable(gl.CULL_FACE);
        }
            
    }

    setMatrices(mModel : mat4, mView : mat4, mPerspective : mat4) : void{
        this.mModel = mModel;
        this.mView = mView;
        this.mPerspective = mPerspective;
        if(this.tag == MaterialTag.lit ||
            this.tag == MaterialTag.translucent) {
            if(!this.mNormal) this.mNormal = mat4.create();
            mat4.invert(this.mNormal, mModel);
            mat4.transpose(this.mNormal, this.mNormal);
        }
    }

    update() : void {
        this.shader.setMatrixUniforms(this.mModel, this.mView, this.mPerspective);
        if(this.tag == MaterialTag.lit ||
            this.tag == MaterialTag.translucent) {
            if(!this.mNormal) this.mNormal = mat4.create();
            this.shader.setMatrix('u_mNormal', this.mNormal);
        }
    }

    use() : void {
        if(!this.shader.binded){
            RM.bindShader(this.shader);
            this.setup();
        }
        this.update();
    }
}