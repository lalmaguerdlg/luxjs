import { Transform } from './transform'

export class Component {
    constructor(){}
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
    clone(){ return new Component(); }
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
