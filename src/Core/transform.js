import { vec3, mat4, quaternion, glMatrix } from 'gl-matrix'


export class Transform{
    constructor(parent){
        this.parent = parent || undefined;
        this.position = vec3.create();
        this.rotation = vec3.create();
        this.scale = vec3.create();
        this.worldMatrix = mat4.create();
    }

    toMatrix(){
        mat4.identity(this.worldMatrix);
        mat4.translate(this.worldMatrix, this.worldMatrix, this.position);
        mat4.rotateX(this.worldMatrix, this.worldMatrix, glMatrix.toRadian(this.rotation[0]));
        mat4.rotateY(this.worldMatrix, this.worldMatrix, glMatrix.toRadian(this.rotation[1]));
        mat4.rotateZ(this.worldMatrix, this.worldMatrix, glMatrix.toRadian(this.rotation[2]));
        mat4.scale(this.worldMatrix, this.worldMatrix, this.scale);
        return this.worldMatrix;
    }
}