export class AttributePointer{
    constructor(location, size, type, normalized, stride, offset){
        this.location = location;
        this.size = size;
        this.type = type;
        this.normalized = normalized;
        this.stride = stride;
        this.offset = offset;
    }
}