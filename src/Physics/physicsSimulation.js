import { vec3 } from "gl-matrix";


export class PhysicsSimulation{
    constructor() {
        this.useGravity = true;
        this.gravity = vec3.create();
        vec3.set(this.gravity, 0.0, -9.8, 0.0);
    }

    simulate(time, bodies) {
        for(let b of bodies) {
            if(this.useGravity) {
                b.applyGravity(this.gravity);
            }
            b.simulate(time);
        }

        // Do Collision Checks
    }
}