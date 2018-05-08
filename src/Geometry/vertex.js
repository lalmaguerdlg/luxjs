import { gl } from '../webgl'
import { AttributePointer } from './attributePointer';

let elementsPerVertex = 10;

let bytesPerElement = Float32Array.BYTES_PER_ELEMENT;

function toBytes(value){
    return value * bytesPerElement;
}

export let VERTEX_LAYOUT = [
    { 
        name: 'a_position',
        attribute: new AttributePointer (0, 3, gl.FLOAT, false, toBytes(elementsPerVertex), 0)
    },
    { 
        name: 'a_normal', 
        attribute: new AttributePointer (1, 3, gl.FLOAT, false, toBytes(elementsPerVertex), toBytes(3))
    },
    { 
        name: 'a_color',
        attribute: new AttributePointer (2, 4, gl.FLOAT, false, toBytes(elementsPerVertex), toBytes(6))
    },
];

export class Vertex{
    constructor(vertex, normal, color){
        this.pos = vertex || [0.0, 0.0, 0.0];
        this.normal = normal || [0.0, 1.0, 0.0];
        this.color = color || [1.0, 1.0, 1.0, 1.0];
    }
    toArray(){
        let result = this.pos;
        result = result.concat(this.normal);
        result = result.concat(this.color);
        return result;
    }
}