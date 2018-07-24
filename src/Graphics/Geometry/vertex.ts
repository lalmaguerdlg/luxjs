import { gl } from '../webgl'
import { AttributePointer } from './attributePointer';

export class Vertex{
    position: number[];
    normal: number[];
    uv: number[];
    constructor(position ?: number[], normal ?: number[], uv ?: number[]) {
        this.position = position || [0.0, 0.0, 0.0];
        this.normal = normal || [0.0, 1.0, 0.0];
        this.uv = uv || [0.0, 0.0];
    }
    clone() : Vertex {
        let clone = new Vertex();
        clone.position = this.position.slice();
        clone.normal = this.normal.slice();
        clone.uv = this.uv.slice();
        return clone;
    }
    toArray() : number[] {
        let result = this.position;
        result = result.concat(this.normal);
        result = result.concat(this.uv);
        return result;
    }
}

export type Attribute = {
    name: string;
    elements: number;
}

let attributes: Attribute[] = [
    {name: "a_position", elements: 3 },
    {name: "a_normal", elements: 3 },
    {name: "a_texCoords", elements: 2 },
]

let bytesPerElement = Float32Array.BYTES_PER_ELEMENT;

function calculateElements(attribs : Attribute[]) : number{
    let result = 0;
    for(let attrib of attribs) {
        result += attrib.elements;
    }
    return result;
}

function toBytes(value: number) : number {
    return value * bytesPerElement;
}

let elementsPerVertex = calculateElements(attributes);

export type VertexLayoutItem = {
    name: string;
    attribute: AttributePointer;
}

function createLayout(attribs : Attribute[]) : VertexLayoutItem[] {
    let result : VertexLayoutItem[] = [];
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