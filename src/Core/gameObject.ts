import { Transform } from './transform'
import { Component, BehaviourComponent } from './component'
import { vec3, quat } from 'gl-matrix';
import { Scene } from './scene';

export class GameObject{
    parent?: GameObject;
    scene: Scene;
    transform: Transform;
    children: GameObject[];
    components: Component[];
    input: any;
    active: boolean;
    tag: string;
    name: string;

    constructor(parent?: GameObject){
        this.parent = parent;
        this.transform = new Transform();
        if (this.parent) {
            this.scene = this.parent.scene;
            this.transform.setParent(this.parent.transform);
        }

        this.children = [];
        this.components = [];

        this.active = true;
        this.tag = 'gameobject';
        this.name = 'gameobject';
    }

    awake(): void {
        for(let c of this.components) {
            c.awake();
        }
        for(let child of this.children) { 
            child.awake();
        }
    }

    start(): void {
        for (let c of this.components) {
            c.start();
        }
        for (let child of this.children) {
            child.start();
        }
    }


    add(object: GameObject | Component) : void {
        if (object instanceof GameObject) this._addChild(object);
        else if (object instanceof Component) this._addComponent(object);
    }
    
    attach(object: GameObject | Component) : void {
        if( object instanceof GameObject) this._addChild(object);
        else if( object instanceof Component) this._addComponent(object);
    }
    
    setActive(value: boolean) : void {
        if(this.active != value) {
            if (!this.active && value) {
                for(let c of this.components) {
                    if(c instanceof BehaviourComponent) c.awake();
                }
            }
            this.active = value;
            for(let child of this.children){
                child.setActive(value);
            }
        }
    }

    setParent(parent: GameObject) : void {
        this.parent = parent;
        this.transform.parent = parent.transform;
    }

    findObjectWithName(name: string) : GameObject | null {
        let result:GameObject | null = null;
        if( this.name == name ) result = this;
        else {
            for(let child of this.children) {
                if( child.name == name ){
                    result = child;
                    break;
                }
                else{
                    result = child.findObjectWithName(name);
                    if( result ) break;
                }
            }
        }
        return result;
    }

    findObjectsWithTag(tag) : GameObject[] {
        let result:GameObject[] = [];
        if( this.tag == tag ) result.push(this);
        
        for(let child of this.children) {
            if( child.tag == tag ) 
                result.push(child);
            
            let objects = child.findObjectsWithTag(tag);
            result = result.concat(objects);
        }
        
        return result;
    }

    getComponent<T extends Component>(type: {new (...args: any[]):T}) : T | null{
        let result: T | null = null;
        for( let c of this.components) {
            if( c instanceof type ){
                result = c;
                break;
            }
        }
        return result;
    }

    getComponents<T extends Component>(type: {new(...args: any[]):T}) : T[] {
        let result:T[] = [];
        let component = this.getComponent<T>(type);
        if (component !== null) result.push(component);
        for (let child of this.children) {
            result = result.concat(child.getComponents<T>(type))
        }
        return result;
    }

    getComponentList(typeList: any[]) : Component[] {
        let result:Component[] = [];
        for(let c of this.components) {
            for(let t of typeList) {
                if(c instanceof t) result.push(c);
            }
        }
        return result;
    }

    getComponentsList(typeList: any[]) : Component[] {
        let result:Component[] = this.getComponentList(typeList);
        for(let child of this.children){
            result = result.concat(child.getComponentsList(typeList));
        }
        return result;
    }

    hasComponent(type:any) : boolean { 
        for (let c of this.components) {
            if (c instanceof type) return true;
        }
        return false;
    }

    clone() {
        let cloned = new GameObject();
        if(this.parent){
            cloned.parent = this.parent;
            cloned.scene = this.scene;
        }
        cloned.transform.position = vec3.clone(this.transform.position);
        cloned.transform.rotation = quat.clone(this.transform.rotation);
        cloned.transform.scale = vec3.clone(this.transform.scale);
        
        for(let c of this.components) {
            let clonedComponent = c.clone();
            cloned.attach(clonedComponent);
        }

        for(let child of this.children) { 
            let clonedChild = child.clone();
            cloned.add(clonedChild);
        }

        return cloned;
    }

    private _addChild(gameObject: GameObject) : void {
        let duplicated : boolean = false;

        for(let c of this.children){
            if( c == gameObject){
                duplicated = true;
                break;
            }
        }

        if(!duplicated){
            gameObject.setParent(this);
            this.children.push(gameObject);
        }
    }

    private _addComponent(component: Component) : void {
        if ( component.gameObject ) return;
        let componentType: any = component.constructor;
        let duplicated: boolean = false;
        for(let c of this.components){
            if( c.constructor === componentType){
                duplicated = true;
                break;
            }
        }

        if(!duplicated){
            component.setOwner(this);
            this.components.push(component);
            component.onAttach();
            if(component instanceof BehaviourComponent){
                component.awake();
                component.start();
            }
        }
    }

}

