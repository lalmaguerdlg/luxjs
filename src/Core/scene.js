import { GameObject } from './gameObject'
import { PointLight } from "../Render/Lights/pointLight";
import { Camera } from "../Render/camera";


export class Scene {
    constructor() {
        this.gameObjects = [];
        this.lights = [];
        this.cameras = [];
    }

    add(object) {
        if ( object instanceof GameObject)      this.gameObjects.push(object);
        else if ( object instanceof PointLight) this.lights.push(object);
        else if ( object instanceof Camera)     this.cameras.push(object);
    }
}
