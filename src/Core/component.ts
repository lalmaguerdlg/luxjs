import { Transform } from './transform'
import { GameObject } from './gameObject';
import { ITime } from './time';

export class Component {
    gameObject ?: GameObject;
    transform ?: Transform;
    active: boolean;

    constructor(){
        this.active = true;
    }

    enable() : void {
        this.active = true;
    }

    disable() : void {
        this.active = false;
    }

    setOwner(gameObject: GameObject) : void {
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    }

    getComponent(type : any) : Component | null {
        if(!this.gameObject) return null;
        return this.gameObject.getComponent(type);
    }

    onAttach() : void {}
    awake() : void { }
    start() : void { }
    clone(): Component {
        let cloned = new (<any>this).constructor();
        cloned = (<any>Object).assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        return cloned;
    }
}

export class PhysicsComponent extends Component {
    kinematic: boolean;
    constructor() {
        super();
        this.kinematic = false;
    }
    simulate(time: ITime) : void { }
}

export class BehaviourComponent extends Component {
    constructor(){
        super();
    }

    fixedUpdate(time: ITime) : void {}
    update(time: ITime) : void {}
    lateUpdate(time: ITime) : void {}
}

export class RenderComponent extends Component {
    constructor(){
        super();
    }
    render() : void {}
}
