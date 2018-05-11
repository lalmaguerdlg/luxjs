import { BaseMaterial } from './baseMaterial'
import { MaterialTag } from './baseMaterial'
import { RM } from '../../Core/resourceManager'

let shaderSource = {
    vs: 
        `#version 300 es
        in vec3 a_position;
        in vec3 a_normal;
      
        uniform mat4 u_model;
        uniform mat4 u_view;
        uniform mat4 u_perspective;
        uniform mat4 u_mNormal;
      
        out vec3 normal;
        void main(void) {
            normal = (u_mNormal * vec4(a_normal, 0.0)).xyz;
            normal = normalize(normal);
            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);
        }`,
    ps: 
        `#version 300 es
        precision mediump float;

        in vec3 normal;

        out vec4 outputColor;
        void main(void) {
            outputColor =  vec4(abs(normal), 1.0);

            // Gamma correction
            float gamma = 2.2;
            outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));
        }`,
}


export class NormalMaterial extends BaseMaterial{
    constructor(vargs){
        let args = vargs || {};
        args['tag'] = args['tag'] || MaterialTag.unlit;
        let shader = RM.createShader('normal-shader', shaderSource.vs, shaderSource.ps);
        super(shader, args);
        this.mNormal = args['mNormal'] || [];
    }

    setup(){
        super.setup();
        this.shader.setMatrix('u_mNormal', this.mNormal);
    }
} 