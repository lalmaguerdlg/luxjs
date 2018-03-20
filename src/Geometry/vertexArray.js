export class VertexArray{
    constructor(vertices, layout){
        this.vertices = vertices;
        this.array = this._toSingleArray();
        this.count = vertices.length;
        this.layout = layout;
    }

    _toSingleArray(){
        let result = [];
        for(let vertex of this.vertices){
            let v = vertex.toArray();
            result = result.concat(v);
        }
        return new Float32Array(result);
    }
}