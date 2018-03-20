export class Vertex{
    constructor(vertex, color){
        this.pos = vertex || [0.0, 0.0, 0.0];
        this.color = color || [1.0, 1.0, 1.0, 1.0];
    }
    toArray(){
        let result = this.pos.concat(this.color);
        return result;
    }
}