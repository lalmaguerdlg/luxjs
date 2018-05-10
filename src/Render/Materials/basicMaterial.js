import { gl } from '../webgl'
import { BaseMaterial } from './baseMaterial'

let basicShaderSource = {
    vs: 
        `#version 300 es
        in vec3 a_position;
        in vec3 a_normal;
    
        uniform mat4 u_model;
        uniform mat4 u_view;
        uniform mat4 u_perspective;
    
        void main(void) {
            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);
        }`,
    ps: 
        `#version 300 es
        precision mediump float;
        
        uniform vec3 u_materialColor;

        out vec4 outputColor;
        void main(void) {
            outputColor = vec4(u_materialColor, 1.0);

            // Gamma correction
            float gamma = 2.2;
            outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));
        }`,
}


export class BasicMaterial extends BaseMaterial{
    constructor(shader, vargs){
        super(shader, vargs);
    }
} 