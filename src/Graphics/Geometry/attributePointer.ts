export class AttributePointer {
    location : number;
    size : number;
    type : number;
    normalized : boolean;
    stride : number;
    offset : number;

    constructor(location : number, size : number, type : number, 
        normalized : boolean, stride : number, offset : number) {

        this.location = location;
        this.size = size;
        this.type = type;
        this.normalized = normalized;
        this.stride = stride;
        this.offset = offset;

    }
}