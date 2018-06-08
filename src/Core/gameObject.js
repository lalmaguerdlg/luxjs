import { Transform } from './transform'
import { Component } from './component'

export class GameObject{
    constructor(parent){
        this.parent = parent || undefined;
        this.transform = new Transform();
        if(this.parent){
            this.transform.parent = this.parent.transform;
        }
        this.children = [];
        this.components = [];

        this.input = undefined;
        this.active = true;
    }

    add(object) {
        if( object instanceof GameObject) this._addChild(object);
        else if( object instanceof Component) this._addComponent(object);
    }

    setParent(parent){
        this.parent = parent;
        this.transform.parent = parent.transform;
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
        }
    }

    getComponent(name){
        for(let c of this.components){
            if(c.constructor.name === name) return c;
        }
    }

    getComponents(name){
        let result = [];
        let component = this.getComponent(name);
        if (component) result.push(component);
        for(let child of this.children){
            result = result.concat(child.getComponents(name))
        }
        return result;
    }

    input() {
        for(let child of this.children){
            child.input();
        }
    }

    update() {
        for(let component of this.components){
            component.update();
        }

        for(let child of this.children){
            child.update();
        }
    }

    render() {
        for(let component of this.components){
            component.render();
        }

        for (let child of this.children) {
            child.render();
        }
    }
}

