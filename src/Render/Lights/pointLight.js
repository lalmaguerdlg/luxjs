export class PointLight{
    constructor(vargs){
        this.position = vargs['position'] || [0.0, 0.0, 0.0];

        this.color = vargs['color'] || [1.0, 1.0, 1.0];
        this.intensity = vargs['intensity'] || 1.0;
    }
}