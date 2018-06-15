import { vec3 } from "gl-matrix";

type PointLightArgs = {
    position?: vec3 | number[]
    color?: vec3 | number[]
    intensity?: number
}

export class PointLight {

    position: vec3 | number[]
    color: vec3 | number[]
    intensity: number

    constructor(args ?: PointLightArgs) {
        args = args || {};
        this.position = args.position || [0.0, 0.0, 0.0];
        this.color = args.color || [1.0, 1.0, 1.0];
        this.intensity = args.intensity || 1.0;
    }
}