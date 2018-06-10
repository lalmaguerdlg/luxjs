import { vec3, mat4, quat, glMatrix } from 'gl-matrix'

let forward = vec3.create();
let right = vec3.create();
let up = vec3.create();

vec3.set(forward, 0, 0, -1);
vec3.set(right, 1, 0, 0);
vec3.set(up, 0, 1, 0);

export class Transform {
    constructor(parent){
        this.parent = parent || undefined;
        this.position = vec3.create();
        this.rotation = quat.create();
        this.scale = vec3.create();
        vec3.set(this.scale, 1, 1, 1);
    }

    toLocalMatrix() {
        let local = mat4.create();
        mat4.fromRotationTranslationScale(local, this.rotation, this.position, this.scale );
        return local;
    }

    toWorldMatrix() {
        let world = this.toLocalMatrix();
        if(this.parent){
            let parentWorld = this.parent.toWorldMatrix();
            mat4.mul(world, parentWorld, world);
        }
        return world;
    }

    detach() {
        let world = this.toWorldMatrix();
        this.fromWorldMatrix(world);
        this.parent = undefined;
    }

    fromWorldMatrix(world) {
        mat4.getTranslation(this.position, world);
        mat4.getRotation(this.rotation, world);
        mat4.getScaling(this.scale, world);
    }

    get forward() {
        let result = vec3.create();
        vec3.transformQuat(result, forward, this.rotation);
        return result;
    }

    get right() {
        let result = vec3.create();
        vec3.transformQuat(result, right, this.rotation);
        return result;
    }

    get up() {
        let result = vec3.create();
        vec3.transformQuat(result, up, this.rotation);
        return result;
    }

    applyRotation(rotation){
        quat.mul(this.rotation, this.rotation, rotation);
    }

    setEuler(roll, pitch, yaw) {
        quat.fromEuler(this.rotation, roll, pitch, yaw);
    }

    eulerAdd(roll, pitch, yaw) {
        let dest = quat.create();
        quat.fromEuler(dest, roll, pitch, yaw);
        quat.mul(this.rotation, this.rotation, dest);
    }

    setAxes(forward, right, up) {
        quat.setAxes(this.rotation, forward, right, up);
    }

    setAxisAngle(axis, rads) {
        quat.setAxisAngle(this.rotation, axis, rads);
    }

    getAxisAngle(){
        let result = vec3.create();
        quat.getAxisAngle(result, this.rotation);
        return result;
    }

    applyAxisAngle(axis, rads){
        let dest = quat.create();
        quat.setAxisAngle(dest, axis, rads);
        quat.mul(this.rotation, this.rotation, dest);
    }

    translate(translation){
        vec3.copy(this.position, translation);
    }

    applyTranslation(translation) {
        vec3.add(this.position, this.position, translation);
    }

    applyScale(scaling){
        vec3.mul(this.scale, this.scale, scaling);
    }

    scale(scaling) {
        vec3.copy(this.scale, scaling);
    }
}