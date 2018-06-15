import { Vertex, VertexLayoutItem } from "./vertex";

export class VertexArray {
    vertices: Vertex[];
    array: Float32Array;
    count: number;
    layout: VertexLayoutItem[];

    constructor(vertices : Vertex[], layout : VertexLayoutItem[]) {
        this.vertices = vertices;
        this.array = this._toSingleArray();
        this.count = vertices.length;
        this.layout = layout;
    }

    push(vertex: Vertex) : void {
        if(vertex instanceof Vertex){
            this.vertices.push(vertex);
        }
    }

    _toSingleArray() : Float32Array {
        let result: number[] = [];
        for(let vertex of this.vertices){
            let v = vertex.toArray();
            result = result.concat(v);
        }
        return new Float32Array(result);
    }
}