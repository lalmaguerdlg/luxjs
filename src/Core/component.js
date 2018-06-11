import { Transform } from './transform'

export class Component {
    constructor(){
        this.gameObject = undefined;
        this.transform = undefined;
    }
    setOwner(gameObject){
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    }

    getComponent(type){
        if(!this.gameObject) return;
        return this.gameObject.getComponent(type);
    }

    onAttach() {}
    awake() { }
    start() { }
    clone(){ 
        let cloned = new this.constructor();
        cloned = Object.assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        return cloned;
    }
}

export class PhysicsComponent extends Component {
    constructor() {
        super();
        this.kinematic = false;
    }
    simulate(time) { }
}

export class BehaviourComponent extends Component {
    constructor(){
        super();
    }
    
    update(time){}
    lateUpdate(time){}
}

export class RenderComponent extends Component {
    constructor(){
        super();
    }
    render(){}
}
