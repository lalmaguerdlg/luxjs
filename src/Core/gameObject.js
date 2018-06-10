import { Transform } from './transform'
import { Component, BehaviourComponent } from './component'

export class GameObject{
    constructor(parent){
        this.parent = parent || undefined;
        this.transform = new Transform();
        if (this.parent) {
            this.transform.setParent(this.parent.transform);
        }

        this.children = [];
        this.components = [];

        this.input = undefined;
        this.active = true;
    }

    awake() {
        for(let c of this.components) {
            c.awake();
        }
        for(let child of this.children) { 
            child.awake();
        }
    }

    start() {
        for (let c of this.components) {
            c.start();
        }
        for (let child of this.children) {
            child.start();
        }
    }


    add(object) {
        if (object instanceof GameObject) this._addChild(object);
        else if (object instanceof Component) this._addComponent(object);
    }
    
    attach(object) {
        if( object instanceof GameObject) this._addChild(object);
        else if( object instanceof Component) this._addComponent(object);
    }
    
    setActive(value) {
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

    setParent(parent){
        this.parent = parent;
        this.transform.parent = parent.transform;
    }

    getComponent(type) {
        for (let c of this.components) {
            if (c instanceof type) return c;
        }
    }

    getComponents(type) {
        let result = [];
        let component = this.getComponent(type);
        if (component) result.push(component);
        for (let child of this.children) {
            result = result.concat(child.getComponents(type))
        }
        return result;
    }

    getComponentList(typeList) {
        let result = [];
        for(let c of this.components) {
            for(let t of typeList) {
                if(c instanceof t) result.push(c);
            }
        }
        return result;
    }

    getComponentsList(typeList) {
        let result = this.getComponentList(typeList);
        for(let child of this.children){
            result = result.concat(child.getComponentsList(typeList));
        }
        return result;
    }

    hasComponent(type) { 
        for (let c of this.components) {
            if (c instanceof type) return true;
        }
    }

    _addChild(gameObject) {
        if (!gameObject instanceof GameObject) return;
        let duplicated = false;
        for(let c of this.children){
            if( c == gameObject){
                duplicated = ture;
                break;
            }
        }

        if(!duplicated){
            gameObject.setParent(this);
            this.children.push(gameObject);
        }
    }

    _addComponent(component) {
        if ( !component instanceof Component) return;
        let componentType = component.constructor.name;
        let duplicated = false;
        for(let c of this.components){
            if( c.constructor.name === componentType){
                duplicated = ture;
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

