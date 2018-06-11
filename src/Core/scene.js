import { GameObject } from './gameObject'
import { PointLight } from "../Render/Lights/pointLight";
import { Camera } from "../Render/camera";


export class Scene {
    constructor() {
        this.gameObjects = [];
        this.lights = [];
        this.cameras = [];
        this.isPlaying = false;
    }

    add(object) {
        if ( object instanceof GameObject) { 
            if(!object.scene){
                object.scene = scene;
                this.gameObjects.push(object);
                if(this.isPlaying){
                    object.awake();
                    object.start();
                }
            }
            else {
                console.warn("Scene: Can't add gameobjec to scene, it is already in this scene");
            }
        }
        else if ( object instanceof PointLight) this.lights.push(object);
        else if ( object instanceof Camera)     this.cameras.push(object);
    }

    findObjectWithName(name) {
        let result = undefined;
        for(let go of this.gameObjects) {
            result = go.findObjectWithName(name);
            if(result)
                break;
        }
        return result;
    }

    findObjectsWithTag(tag) {
        let result = [];

        for(let go of this.gameObjects) {
            let objects = go.findObjectsWithTag(tag);
            result = result.concat(objects);
        }
        
        return result;
    }

}
