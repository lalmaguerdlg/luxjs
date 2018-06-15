import { vec3 } from "gl-matrix";
import { ITime } from "../Core/time";
import { PhysicsComponent } from "../Core/component";
import { Rigidbody } from "./Components/rigidbody";


export class PhysicsSimulation{
    useGravity : boolean = true;
    gravity : vec3 = vec3.create();
    constructor() {
        vec3.set(this.gravity, 0.0, -9.8, 0.0);
    }

    simulate(time: ITime, bodies: PhysicsComponent[]) {
        for(let b of bodies) {
            if(this.useGravity) {
                (b as Rigidbody).applyGravity(this.gravity);
            }
            b.simulate(time);
        }

        // Do Collision Checks
    }
}