import { Shader } from '../Render/shader'
import { Geometry } from '../Render/Geometry/geometry'
import { Mesh } from '../Render/Geometry/mesh'

class ResourceManager{
    constructor() {
        this.shaders = {};
        this.meshes = {};
        this.currentShader;
    }

    bindShader(shader){
        if(this.currentShader != shader){
            if(this.currentShader)
                this.currentShader.unbind();
            this.currentShader = shader;
            this.currentShader.bind();
        }
    }

    createShader(name, vs, fs) {
        if(!this.shaders[name]) {
            let shader = new Shader(vs, fs, name);
            shader.compile();
            this.addShader(name, shader);
        }
        else{
            console.warn('Resource manager: ' + name + ' could not be created because there is another shader with the same name.');
        }
        return this.shaders[name];
    }

    addShader(name, shader){
        if(!shader instanceof Shader){
            console.warn('Resource manager: object is not instance of Shader');
            return;
        }
        if(!this.shaders[name]){
            this.shaders[name] = shader;
        }
    }

    getShader(name){
        return this.shaders[name];
    }


}


export let RM = new ResourceManager();