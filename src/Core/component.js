import { Transform } from './transform'

class Component {
    constructor(gameObject){
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    }

    update(){
        
    }
}