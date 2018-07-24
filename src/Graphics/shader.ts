import { gl } from './webgl'
import { VERTEX_LAYOUT } from './Geometry/vertex'
import { mat4, vec2, vec3, vec4, mat2, mat3 } from 'gl-matrix';

type ShaderAttribute = {
    name : string;
    location : number
}

type ShaderUniform = {
    name : string;
    location : WebGLUniformLocation | null
}

export class Shader{

    name : string;
    vertexSource : string;
    fragmentSource : string;

    vs : WebGLShader | null
    fs : WebGLShader | null
    program : WebGLProgram | null

    attributeNames:string[] = [];

    attributes : ShaderAttribute[];
    uniforms : ShaderUniform[];

    binded : boolean = false;
    compiled : boolean = false;

    constructor(vertexShaderSource : string, fragmentShaderSource : string, shaderName ?: string){
        this.name = shaderName || "";
        this.vertexSource = vertexShaderSource;
        this.fragmentSource = fragmentShaderSource;

        for(let attr of VERTEX_LAYOUT) {
            this.attributeNames.push( attr.name );
        }

        this.attributes = [];
        this.uniforms = [];
    }

    setVertexShader(source : string) : void {
        this.vertexSource = source;
    }

    setFragmentShader(source : string ) : void {
        this.fragmentSource = source;
    }

    compile() : void {
        if(this.compiled){
            gl.deleteShader(this.vs);
            gl.deleteShader(this.fs);
            gl.deleteProgram(this.program);
            this.attributes = [];
            this.uniforms = [];
            this.compiled = false;
        }
        this.vs = this._createShader(gl.VERTEX_SHADER, this.vertexSource);
        this.fs = this._createShader(gl.FRAGMENT_SHADER, this.fragmentSource);
        this.program = this._createProgram(this.vs, this.fs);
        if(this.program !== null){

            this.attributes = this.attributes.concat(this._getAttributeLocations(this.attributeNames));
            this.uniforms = this.uniforms.concat(this._getUniformLocations(['u_model', 'u_view', 'u_perspective']));

            this.compiled = true;
        }
    }

    setMatrixUniforms(mModel : mat4, mView : mat4, mPerspective : mat4) : void {
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        this.setMatrix("u_model", mModel);
        this.setMatrix("u_view", mView);
        this.setMatrix("u_perspective", mPerspective);
    }

    setFloat(name : string, value : number) : void {
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let uniform = this._getOrAddUniform(name);
        if (uniform.location !== null){
            gl.uniform1f(uniform.location, value);
        }
    }

    setInt(name : string, value : number) : void {
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let uniform = this._getOrAddUniform(name);
        if (uniform.location !== null){
            gl.uniform1i(uniform.location, value);
        }
    }

    setVecf(name : string, value : vec2 | vec3 | vec4 | number[] ) {
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let uniform = this._getOrAddUniform(name);
        if (uniform.location !== null){
            switch(value.length){
                case 1:
                    gl.uniform1fv(uniform.location, value);
                    break;
                case 2:
                    gl.uniform2fv(uniform.location, value);
                    break;
                case 3:
                    gl.uniform3fv(uniform.location, value);
                    break;
                case 4:
                    gl.uniform4fv(uniform.location, value);
                    break;
                default:
                    console.warn(`${this.name}: Vector length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setVeci(name : string, value : vec2 | vec3 | vec4 | number[] ) : void {
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let uniform = this._getOrAddUniform(name);
        if (uniform.location !== null){
            switch(value.length){
                case 1:
                    gl.uniform1iv(uniform.location, value);
                    break;
                case 2:
                    gl.uniform2iv(uniform.location, value);
                    break;
                case 3:
                    gl.uniform3iv(uniform.location, value);
                    break;
                case 4:
                    gl.uniform4iv(uniform.location, value);
                    break;
                default:
                    console.warn(`${this.name}: Vector length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setMatrix(name : string, value : mat2 | mat3 | mat4 | any){
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let uniform = this._getOrAddUniform(name);
        if (uniform.location !== null) {
            switch(value.length) {
                case 4:
                    gl.uniformMatrix2fv(uniform.location, false, value);
                    break;
                case 9:
                    gl.uniformMatrix3fv(uniform.location, false, value);
                    break;
                case 16:
                    gl.uniformMatrix4fv(uniform.location, false, value);
                    break;
                default:
                    console.warn(`${this.name}: Matrix length ${value.length} is not supported `);
                    break;
            }
        }
    }

    setStruct(name : string, obj : any, varType ?: number) : void {
        if(!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        let vType = varType || gl.FLOAT;
        let self = this;
        let _setStruct = function(name : string, obj : any, varType ?: number) : void {
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

    bind() : void {
        if(!this.binded){
            gl.useProgram(this.program);
            this.binded = true;
        }
    }
    unbind() : void {
        gl.useProgram(null);
        this.binded = false;
    }

    private _createShader(type : number, source : string) : WebGLShader | null {
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

    private _createProgram(vertexShader : WebGLShader | null , 
            fragmentShader : WebGLShader | null) : WebGLProgram | null {

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

    private _getOrAddUniform(name : string) : ShaderUniform {

        let search: ShaderUniform | null = null;

        for(let u of this.uniforms) {
            if(u.name == name) {
                search = u;
                break;
            }
        }

        let result: ShaderUniform;

        if( search === null ) {
            let uniform = this._getUniformLocation(name);
            this.uniforms.push(uniform);
            if( uniform.location === null ) {
                console.warn(this.name + ": No uniform with name " + name + " was found.");
            }
            result = uniform;
        }else{
            result = search;
        }

        return result;
    }

    

    private _getLocation(type : string, name : string) : ShaderUniform | ShaderAttribute {

        let result : ShaderUniform | ShaderAttribute = { name : name, location: null };

        if(type == 'attribute')
            result.location = gl.getAttribLocation(this.program, name);
        else if(type == 'uniform')
            result.location = gl.getUniformLocation(this.program, name);

        return result;
    }

    _getAttributeLocation(attribute : string) : ShaderAttribute {
        return (<ShaderAttribute>this._getLocation('attribute', attribute));
    }

    _getAttributeLocations(attributes : string[]) : ShaderAttribute[] {
        let result:ShaderAttribute[] = [];
        for(let attribute of attributes){
            let location = this._getAttributeLocation(attribute);
            result.push(location);
        }
        return result;
    }

    _getUniformLocation(uniform: string) : ShaderUniform {
        return this._getLocation('uniform', uniform);
    }

    _getUniformLocations(uniforms: string[]) : ShaderUniform[] {
        let result:ShaderUniform[] = [];
        for(let uniform of uniforms){
            let location = this._getUniformLocation(uniform);
            result.push(location);
        }
        return result;
    }
}