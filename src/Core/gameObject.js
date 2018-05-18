import { Transform } from './transform'

export class GameObject{
    constructor(parent){
        this.parent = parent || undefined;
        this.transform = new Transform();
        if(this.parent){
            this.transform.parent = this.parent.transform;
        }
        this.components = [];
        this.input = undefined;
    }

    input() {

    }

    update() {

    }

    fixedUpdate() {

    }
}


class Component {
    constructor(gameObject){
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    }

    update(){

    }

    fixedUpdate(){

    }
}

