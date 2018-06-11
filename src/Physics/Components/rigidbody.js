import { PhysicsComponent } from "../../Core/component";
import { vec3 } from "gl-matrix";


export class Rigidbody extends PhysicsComponent{
    constructor(){
        super();
        this.gravityMultiplier = 1.0;
        this.velocity = vec3.create();
        this.aceleration = vec3.create();
    }

    clone() {
        let cloned = new this.constructor();
        cloned = Object.assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        cloned.velocity = vec3.create();
        cloned.aceleration = vec3.create();
        return cloned;
    }

    awake() {
        if(!this.kinematic)
            this.gameObject.transform.detach();
    }

    applyGravity(gravity) {
        let force = vec3.clone(gravity);
        vec3.scale(force, force, this.gravityMultiplier);
        this.applyForce(force);
    }

    applyForce(force) {
        vec3.add(this.aceleration, this.aceleration, force);
    }

    simulate(time) {
        
        vec3.scaleAndAdd(this.velocity, this.velocity, this.aceleration, time.deltaTime);
        vec3.scaleAndAdd(this.transform.position, this.transform.position, this.velocity, time.deltaTime);
        vec3.set(this.aceleration, 0, 0, 0);
    }
}