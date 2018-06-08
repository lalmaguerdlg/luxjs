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
    }

    add(gameObject) {
        if (!component instanceof GameObject) return;
        let duplicated = false;
        for(let c of this.childs){
            if( c.constructor.name === componentType){
                duplicated = ture;
                break;
            }
        }

        if(!duplicated){
            this.components.push(component);
        }
        this.children.push(gameObject);
    }

    addComponent(component) {
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
            result = result.join(child.getComponents(name))
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

