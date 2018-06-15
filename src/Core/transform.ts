import { vec3, mat4, quat, glMatrix } from 'gl-matrix'

let forward = vec3.create();
let right = vec3.create();
let up = vec3.create();

vec3.set(forward, 0, 0, -1);
vec3.set(right, 1, 0, 0);
vec3.set(up, 0, 1, 0);

export class Transform {
    parent ?: Transform;
    position : vec3 = vec3.create();
    rotation : quat = quat.create();
    scale : vec3 = vec3.create();

    constructor(parent ?: Transform){
        this.parent = parent;
        vec3.set(this.scale, 1, 1, 1);
    }

    toLocalMatrix() : mat4 {
        let local = mat4.create();
        mat4.fromRotationTranslationScale(local, this.rotation, this.position, this.scale );
        return local;
    }

    toWorldMatrix() : mat4 {
        let world = this.toLocalMatrix();
        if(this.parent){
            let parentWorld = this.parent.toWorldMatrix();
            mat4.mul(world, parentWorld, world);
        }
        return world;
    }

    setParent(parent : Transform) : void{
        this.parent = parent;
    }

    detach() : void {
        if (this.parent) {
            let world = this.toWorldMatrix();
            let savedScale = vec3.clone(this.scale);
            this.fromWorldMatrix(world);
            savedScale[0] *= this.parent.scale[0];
            savedScale[1] *= this.parent.scale[1];
            savedScale[2] *= this.parent.scale[2];
            vec3.copy(this.scale, savedScale);
            this.parent = undefined;
        }
    }

    fromWorldMatrix(world : mat4) : void {
        mat4.getTranslation(this.position, world);
        mat4.getRotation(this.rotation, world);
        mat4.getScaling(this.scale, world);
    }

    get forward() : vec3 {
        let result = vec3.create();
        vec3.transformQuat(result, forward, this.rotation);
        return result;
    }

    get right() : vec3 {
        let result = vec3.create();
        vec3.transformQuat(result, right, this.rotation);
        return result;
    }

    get up() : vec3 {
        let result = vec3.create();
        vec3.transformQuat(result, up, this.rotation);
        return result;
    }

    applyRotation(rotation : quat) : void {
        quat.mul(this.rotation, this.rotation, rotation);
    }

    setEuler(roll : number, pitch : number, yaw : number) : void {
        quat.fromEuler(this.rotation, roll, pitch, yaw);
        quat.normalize(this.rotation, this.rotation);
    }

    addEuler(roll : number, pitch : number, yaw : number) : void {
        let dest = quat.create();
        quat.fromEuler(dest, roll, pitch, yaw);
        quat.mul(this.rotation, this.rotation, dest);
    }

    setAxes(forward : vec3 | number[], right : vec3 | number[], up : vec3 | number[]) : void {
        quat.setAxes(this.rotation, forward, right, up);
    }

    setAxisAngle(axis : vec3 | number[], rads : number) : void {
        quat.setAxisAngle(this.rotation, axis, rads);
    }

    getAxisAngle() : vec3 {
        let result = vec3.create();
        quat.getAxisAngle(result, this.rotation);
        return result;
    }

    applyAxisAngle(axis : vec3 | number[], rads : number) : void {
        let dest = quat.create();
        quat.setAxisAngle(dest, axis, rads);
        quat.mul(this.rotation, this.rotation, dest);
    }

    translate(translation : vec3 | number[]) : void {
        vec3.copy(this.position, translation);
    }

    applyTranslation(translation : vec3 | number[]) : void {
        vec3.add(this.position, this.position, translation);
    }

    applyScale(scaling : vec3 | number[]) : void {
        vec3.mul(this.scale, this.scale, scaling);
    }

    setScale(scaling : vec3 | number[]) : void {
        vec3.copy(this.scale, scaling);
    }
}