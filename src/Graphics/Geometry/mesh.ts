import { gl } from '../webgl'
import { VertexArray } from './vertexArray';


type MeshBuffers = {
    vao: WebGLVertexArrayObject | null;
    vbo: WebGLBuffer | null;
    ebo: WebGLBuffer | null;
}

export class Mesh {

    vertices: VertexArray;
    indices : number[];
    buffers: MeshBuffers = { 
        vao: null,
        vbo: null,
        ebo: null
    };
    usage: number;

    isIndexed: boolean;
    loaded: boolean;
    binded: boolean;

    constructor(vertexArray: VertexArray, indices ?: number[], usage ?: number){
        this.vertices = vertexArray;
        //    [ new AttribPointer(0, 3, gl.FLOAT, false, this.vertices.count * Float32Array.BYTES_PER_ELEMENT, 0) ];
        this.indices = indices || [];
        this.isIndexed = indices ? true : false;
        this.usage = usage || gl.STATIC_DRAW;
        this.binded = false;
        this.loaded = false;

    }

    render(mode: number) : void {
        this.bind();
        if(this.isIndexed){
            gl.drawElements(mode, this.indices.length, gl.UNSIGNED_SHORT, 0);
        }
        else {
            gl.drawArrays(mode, 0, this.vertices.count);
        }
        this.unbind();
    }

    bind() : void {
        if(!this.binded){
            if(!this.loaded)
                this._initBuffers();
            gl.bindVertexArray(this.buffers.vao);
            this.binded = true;    
        }
    }

    unbind() : void {
        if(this.binded){
            gl.bindVertexArray(null);
            this.binded = false;
        }
    }

    _initBuffers(){
        // VAO = Vertex array buffer
        // VBO = Vertex buffer object
        // EBO = Element buffer object (indices)
        this.buffers.vao = gl.createVertexArray();
        this.buffers.vbo = gl.createBuffer();
        this.buffers.ebo = this.isIndexed ? gl.createBuffer() : null;

        gl.bindVertexArray(this.buffers.vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.vbo);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices.array, this.usage);
        if(this.isIndexed){
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.ebo);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), this.usage);
        }
        for(let item of this.vertices.layout){
            let attr = item.attribute;
            gl.vertexAttribPointer(
                attr.location, // Attribute location
                attr.size, // Number of elements per attribute
                attr.type, // Type of element
                attr.normalized, // Normalized
                attr.stride, // Size of an individual vertex
                attr.offset // Offset from the begining of a  single vertex to this attribute
            );
            gl.enableVertexAttribArray(attr.location);
        }
        gl.bindVertexArray(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        this.loaded = true;
    }
}