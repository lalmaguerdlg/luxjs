import { GameObject } from './gameObject'
import { PointLight } from "../Graphics/Lights/pointLight";
import { Camera } from "../Graphics/camera";
import { Component } from './component';


export class Scene {
    gameObjects: GameObject[];
    lights: PointLight[];
    cameras: Camera[];
    isPlaying: boolean;
    constructor() {
        this.gameObjects = [];
        this.lights = [];
        this.cameras = [];
        this.isPlaying = false;
    }

    add(object: GameObject | PointLight | Camera): void {
        if ( object instanceof GameObject) { 
            if(!object.scene){
                object.scene = this;
                this.gameObjects.push(object);
                if(this.isPlaying){
                    object.awake();
                    object.start();
                }
            }
            else {
                console.warn("Scene: Can't add gameobject to scene, it is already in this scene");
            }
        }
        else if ( object instanceof PointLight) this.lights.push(object);
        else if ( object instanceof Camera)     this.cameras.push(object);
    }

    findComponents<T extends Component>( type: {new(...args: any[]):T}) : T[] {
        let result : T[] = [];
        for(let go of this.gameObjects){
            result = result.concat(go.getComponents(type));
        }
        return result;
    }

    findComponentsList(typeList: any[]) : Component[] {
        let result : Component[] = [];
        for(let go of this.gameObjects){
            result = result.concat(go.getComponentsList(typeList));
        }
        return result;
    }

    findObjectWithName(name: string): GameObject | null {
        let result:GameObject | null = null;
        for(let go of this.gameObjects) {
            result = go.findObjectWithName(name);
            if(result !== null)
                break;
        }
        return result;
    }

    findObjectsWithTag(tag: string): GameObject[] {
        let result:GameObject[] = [];

        for(let go of this.gameObjects) {
            let objects = go.findObjectsWithTag(tag);
            result = result.concat(objects);
        }
        
        return result;
    }

}
