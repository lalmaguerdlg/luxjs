export class PointLight{
    constructor(vargs){
        this.position = vargs['position'] || [0.0, 0.0, 0.0];
        this.ambient = vargs['ambient'] || [0.1, 0.1, 0.1];
        this.diffuse = vargs['diffuse'] || [0.5, 0.5, 0.5];
        this.specular = vargs['specular'] || [1.0, 1.0, 1.0];
    }
}