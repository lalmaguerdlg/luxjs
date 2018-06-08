import { Transform } from './transform'

export class Component {
    constructor(){}
    setOwner(gameObject){
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    }
    update(){}
    render(){}
}