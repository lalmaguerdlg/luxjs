import { gl } from '../webgl'
import { AttributePointer } from './attributePointer';

export class Vertex{
    constructor(vertex, normal, uv){
        this.position = vertex || [0.0, 0.0, 0.0];
        this.normal = normal || [0.0, 1.0, 0.0];
        this.uv = uv || [0.0, 0.0];
    }
    toArray(){
        let result = this.position;
        result = result.concat(this.normal);
        result = result.concat(this.uv);
        return result;
    }
}

let attributes = [
    {name: "a_position", elements: 3 },
    {name: "a_normal", elements: 3 },
    {name: "a_texCoords", elements: 2 }
]

let bytesPerElement = Float32Array.BYTES_PER_ELEMENT;

function calculateElements(attribs){
    let result = 0;
    for(let attrib of attribs) {
        result += attrib.elements;
    }
    return result;
}

function toBytes(value){
    return value * bytesPerElement;
}

let elementsPerVertex = calculateElements(attributes);

function createLayout(attribs) {
    let result = [];
    let stride = toBytes(elementsPerVertex);
    let offset = 0;
    for(let i = 0; i < attribs.length ; i++) {
        let attrib = attribs[i];
        let location = i;
        result.push( { 
            name: attrib.name,
            attribute: new AttributePointer(location, attrib.elements, gl.FLOAT, false, stride, offset)
        });
        offset += toBytes(attrib.elements);
    }
    return result;
}


export let VERTEX_LAYOUT = createLayout(attributes);