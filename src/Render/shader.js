import { gl } from './webgl'
import { VERTEX_LAYOUT } from './Geometry/vertex'


export class Shader{

    constructor(vertexShaderSource, fragmentShaderSource, shaderName){
        this.name = shaderName || "";
        this.vsSource = vertexShaderSource;
        this.fsSource = fragmentShaderSource;
        
        let vs = this._createShader(gl.VERTEX_SHADER, this.vsSource);
        let fs = this._createShader(gl.FRAGMENT_SHADER, this.fsSource);
        this.program = this._createProgram(vs, fs);

        let attributeNames = [];
        for(let attr of VERTEX_LAYOUT) {
            attributeNames.push( attr.name );
        }

        this.attributes = Object.assign({}, this._getAttributeLocations(attributeNames));
        this.uniforms = Object.assign({}, this._getUniformLocations(['u_model', 'u_view', 'u_perspective']));
        this.binded = false;
    }

    setMatrixUniforms(mModel, mView, mPerspective){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        this.setMatrix("u_model", mModel);
        this.setMatrix("u_view", mView);
        this.setMatrix("u_perspective", mPerspective);
    }

    setFloat(name, value){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let location = this._getOrAddUniform(name);
        if (location !== null){
            gl.uniform1f(location, value);
        }
    }

    setInt(name, value){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let location = this._getOrAddUniform(name);
        if (location !== null){
            gl.uniform1f(location, value);
        }
    }

    setVecf(name, value){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let location = this._getOrAddUniform(name);
        if (location !== null){
            switch(value.length){
                case 1:
                    gl.uniform1fv(location, value);
                    break;
                case 2:
                    gl.uniform2fv(location, value);
                    break;
                case 3:
                    gl.uniform3fv(location, value);
                    break;
                case 4:
                    gl.uniform4fv(location, value);
                    break;
                default:
                    console.warn(`${this.name}: Vector length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setVeci(name, value){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let location = this._getOrAddUniform(name);
        if (location !== null){
            switch(value.length){
                case 1:
                    gl.uniform1iv(location, value);
                    break;
                case 2:
                    gl.uniform2iv(location, value);
                    break;
                case 3:
                    gl.uniform3iv(location, value);
                    break;
                case 4:
                    gl.uniform4iv(location, value);
                    break;
                default:
                    console.warn(`${this.name}: Vector length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setMatrix(name, value){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let location = this._getOrAddUniform(name);
        if (location !== null){
            switch(value.length){
                case 4:
                    gl.uniformMatrix2fv(location, false, value);
                    break;
                case 9:
                    gl.uniformMatrix3fv(location, false, value);
                    break;
                case 16:
                    gl.uniformMatrix4fv(location, false, value);
                    break;
                default:
                    console.warn(`${this.name}: Matrix length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setStruct(name, obj, varType){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let vType = varType || gl.FLOAT;
        let self = this;
        let _setStruct = function(name, obj, varType) {
            for(let prop in obj){
                let fullname = `${name}.${prop}`;
                let val = obj[prop];
                if(Array.isArray(val)){
                    if(val.length <= 4) { 
                        if(varType == gl.FLOAT)
                            self.setVecf(fullname, val);
                        else if( varType == gl.INT)
                            self.setVeci(fullname, val);
                    }
                    else {
                        self.setMatrix(fullname, val);
                    }
                }
                else {
                    if(varType == gl.FLOAT)
                        self.setFloat(fullname, val);
                    else if( varType == gl.INT)
                        self.setInt(fullname, val);
                    
                }
            }
        }

        if(Array.isArray(obj)) {
            for(let i = 0; i < obj.length; i++){
                let element = obj[i];
                let indexedName = `${name}[${i}]`;
                _setStruct(indexedName, element, vType);
            }
        }
        else {
            _setStruct(name, obj, vType);
        }
    }

    bind(){
        if(!this.binded){
            gl.useProgram(this.program);
            this.binded = true;
        }
    }
    unbind(){
        gl.useProgram(null);
        this.binded = false;
    }

    _getOrAddUniform(name){
        if(!this.uniforms[name] && this.uniforms[name] !== null ){
            let uniform = this._getUniformLocation(name);
            this.uniforms = Object.assign(this.uniforms, uniform);
            if (uniform[name] === null){
                console.warn(this.name + ": No uniform with name " + name + " was found.");
            }
        }
        return this.uniforms[name];
    }

    _createShader(type, source){
        let shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if(!success){
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    _createProgram(vertexShader, fragmentShader){
        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);

        for(let i = 0; i < VERTEX_LAYOUT.length; i++){
            gl.bindAttribLocation(program, i, VERTEX_LAYOUT[i].name );
        }

        gl.linkProgram(program);
        let success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if(!success){
            console.error(gl.getProgramInfoLog(program))
            gl.deleteProgram(program);
            return null;
        }
        return program;
    }

    _getLocation(type, name){
        let result = {};
        let location;

        if(type == 'attribute')
            location = gl.getAttribLocation(this.program, name);
        else if(type == 'uniform')
            location = gl.getUniformLocation(this.program, name);

        result[name] = location;
        return result;
    }

    _getAttributeLocation(attribute){
        return this._getLocation('attribute', attribute);
    }

    _getAttributeLocations(attributes){
        let result = {};
        for(let attribute of attributes){
            let location = this._getAttributeLocation(attribute);
            result = Object.assign(result, location);
        }
        return result;
    }

    _getUniformLocation(uniform){
        return this._getLocation('uniform', uniform);
    }

    _getUniformLocations(uniforms){
        let result = {};
        for(let uniform of uniforms){
            let location = this._getUniformLocation(uniform);
            if(location)
                result = Object.assign(result, location);
        }
        return result;
    }
}