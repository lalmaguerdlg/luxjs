import { Shader } from '../Graphics/shader'

class ResourceManager{
    shaders: any = {};
    meshes: any = {};
    currentShader: Shader;

    constructor() { }

    bindShader(shader : Shader) : void {
        if(this.currentShader != shader){
            if(this.currentShader)
                this.currentShader.unbind();
            this.currentShader = shader;
            this.currentShader.bind();
        }
    }

    createShader(name : string, vs : string, fs : string) : Shader {
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

    addShader(name : string, shader : Shader) : void {
        /*
        if(! (shader as any) instanceof Shader ){
            console.warn('Resource manager: object is not instance of Shader');
            return;
        }
        */
        if(!this.shaders[name]){
            this.shaders[name] = shader;
        }
    }

    getShader(name : string) : Shader | undefined {
        return this.shaders[name];
    }


}


export let RM = new ResourceManager();