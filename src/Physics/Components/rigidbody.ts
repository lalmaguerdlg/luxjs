import { PhysicsComponent } from "../../Core/component";
import { vec3 } from "gl-matrix";
import { ITime } from "../../Core/time";


export class Rigidbody extends PhysicsComponent {
    gravityMultiplier : number = 1.0;
    velocity : vec3 = vec3.create();
    aceleration : vec3 = vec3.create();

    constructor(){
        super();
    }

    clone() : Rigidbody {
        let cloned = new (<any>this).constructor();
        cloned = (<any>Object).assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        cloned.velocity = vec3.create();
        cloned.aceleration = vec3.create();
        return cloned;
    }

    awake() : void {
        if(!this.kinematic)
            this.gameObject!.transform.detach();
    }

    applyGravity(gravity: vec3 | number[] ) : void {
        let force = vec3.clone(gravity);
        vec3.scale(force, force, this.gravityMultiplier);
        this.applyForce(force);
    }

    applyForce(force: vec3 | number[] ) : void {
        vec3.add(this.aceleration, this.aceleration, force);
    }

    simulate(time: ITime) : void {
        vec3.scaleAndAdd(this.velocity, this.velocity, this.aceleration, time.deltaTime);
        vec3.scaleAndAdd(this.transform!.position, this.transform!.position, this.velocity, time.deltaTime);
        vec3.set(this.aceleration, 0, 0, 0);
    }
}