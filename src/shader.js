class Shader{

    constructor(vertexShaderSource, fragmentShaderSource){
        this.vsSource = vertexShaderSource;
        this.fsSource = fragmentShaderSource;
        
        let vs = this._createShader(gl.VERTEX_SHADER, this.vsSource);
        let fs = this._createShader(gl.FRAGMENT_SHADER, this.fsSource);
        this.program = this._createProgram(vs, fs);
        this.attributes = Object.assign({}, this._getAttributeLocations(['a_position', 'a_color']));
        this.uniforms = Object.assign({}, this._getUniformLocations(['u_model', 'u_view', 'u_perspective']));
        this.binded = false;
    }

    setMatrixUniforms(mModel, mView, mPerspective){
        this.setMatrix("u_model", mModel);
        this.setMatrix("u_view", mView);
        this.setMatrix("u_perspective", mPerspective);
    }

    setFloat(name, value){
        let location = this._getOrAddUniform(name);
        if (location !== null){
            gl.uniform1f(location, value);
        }
    }

    setInt(name, value){
        let location = this._getOrAddUniform(name);
        if (location !== null){
            gl.uniform1f(location, value);
        }
    }

    setVecf(name, value){
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
                    console.warn(`Vector length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setVeci(name, value){
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
                    console.warn(`Vector length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setMatrix(name, value){
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
                    console.warn(`Matrix length ${value.length} is not supported `);
                    break;
            }
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
                console.warn("No uniform with name " + name + " was found.");
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

        gl.bindAttribLocation(program, 0, "a_position" );
        gl.bindAttribLocation(program, 1, "a_color" );

        gl.linkProgram(program);
        let success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if(!success){
            console.error(gl.getPrograInfoLog(program))
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