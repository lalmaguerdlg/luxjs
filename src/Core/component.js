import { Transform } from './transform'

export class Component {
    constructor(){}
    setOwner(gameObject){
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    }
    clone(){ return new Component(); }
}

export class PhysicsComponent extends Component {
    constructor() {
        super();
    }
    simulate(time) { }
}

export class BehaviourComponent extends Component {
    constructor(){
        super();
    }
    awake(){}
    start(){}
    update(time){}
    lateUpdate(time){}
}

export class RenderComponent extends Component {
    constructor(){
        super();
    }
    render(){}
}
