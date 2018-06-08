import { GameObject } from './gameObject'

export class Scene {
    constructor() {
        this.gameObjects = [];
    }

    add(gameObject){
        if (!component instanceof GameObject) return;
        this.gameObjects.push(gameObject);
    }
}
