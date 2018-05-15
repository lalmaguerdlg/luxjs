export class PointLight{
    constructor(vargs){
        this.position = vargs['position'] || [0.0, 0.0, 0.0];
        this.ambient = vargs['ambient'] || [0.1, 0.1, 0.1];
        this.diffuse = vargs['diffuse'] || [0.5, 0.5, 0.5];
        this.specular = vargs['specular'] || [1.0, 1.0, 1.0];

        this.color = vargs['color'] || [1.0, 1.0, 1.0];
        this.range = vargs['range'] || 100.0;

        this.constant = vargs['constant'] || 1.0;
        this.linear = vargs['linear'] || 1.0 / this.range; //0.09;
        this.quadratic = vargs['quadratic'] || 1.0 / (this.range * this.range) //0.032;
    }

    calculateAttenuation(){
        this.constant = 1.0;
        this.linear = 10.0 / this.range;
        this.quadratic = 10.0 / (this.range * this.range);
    }
}