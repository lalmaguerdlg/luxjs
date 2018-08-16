import { vec3 } from "gl-matrix";
import { ITime } from "../Core/time";
import { PhysicsComponent } from "../Core/component";
import { Rigidbody } from "./Components/rigidbody";

export type Integrator = (position : vec3, velocity : vec3, aceleration : vec3, deltaTime: number) => void;

export const Integrators = {
    Euler: function(position : vec3, velocity : vec3, aceleration : vec3, deltaTime: number) : void {
        vec3.scaleAndAdd(position, position, velocity, deltaTime);
        vec3.scaleAndAdd(velocity, velocity, aceleration, deltaTime);
    },
    ModifiedEuler: function(position : vec3, velocity : vec3, aceleration : vec3, deltaTime: number) : void {
        vec3.scaleAndAdd(velocity, velocity, aceleration, deltaTime);
        vec3.scaleAndAdd(position, position, velocity, deltaTime);
    },
    Verlet: function(position : vec3, velocity : vec3, aceleration : vec3, deltaTime: number) : void {
        let halfDelta = deltaTime * 0.5;
        vec3.scaleAndAdd(position, position, velocity, halfDelta);
        vec3.scaleAndAdd(velocity, velocity, aceleration, deltaTime);
        vec3.scaleAndAdd(position, position, velocity, halfDelta);
    },
    VelocityVerlet: function(position : vec3, velocity : vec3, aceleration : vec3, deltaTime: number) : void {
        let halfDelta = deltaTime * 0.5;
        let oldVelocity = vec3.clone(velocity);
        vec3.scaleAndAdd(velocity, velocity, aceleration, deltaTime);
        let sum = vec3.create();
        vec3.add(sum, oldVelocity, velocity);
        vec3.scaleAndAdd(position, position, sum, halfDelta);
    },
    ForestRuth: function(position : vec3, velocity : vec3, aceleration : vec3, deltaTime: number) : void {
        const frCoefficient = 1.0 / (2.0 - Math.pow(2.0, 1.0 / 3.0));
        const frComplement = 1.0 - 2.0 * frCoefficient;
        Integrators.Verlet(position, velocity, aceleration, deltaTime * frCoefficient);
        Integrators.Verlet(position, velocity, aceleration, deltaTime * frComplement);
        Integrators.Verlet(position, velocity, aceleration, deltaTime * frCoefficient);
    }
}

export class PhysicsSimulation{
    useGravity : boolean = true;
    gravity : vec3 = vec3.create();
    integrator : Integrator;
    constructor(integrator) {
        this.integrator = integrator;
        vec3.set(this.gravity, 0.0, -9.8, 0.0);
    }

    simulate(time: ITime, bodies: PhysicsComponent[]) {
        for(let b of bodies) {
            if(this.useGravity) {
                (b as Rigidbody).applyGravity(this.gravity);
            }
            b.simulate(time, this.integrator);
        }

        // Do Collision Checks
    }
}