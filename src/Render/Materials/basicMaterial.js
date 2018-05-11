import { BaseMaterial } from './baseMaterial'
import { MaterialTag } from './baseMaterial'
import { RM } from '../../Core/resourceManager'

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
        
        struct Unlit_Material {
            vec3 emission;
        };

        uniform Unlit_Material u_material;

        out vec4 outputColor;
        void main(void) {
            outputColor = vec4(u_material.emission, 1.0);

            // Gamma correction
            float gamma = 2.2;
            outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));
        }`,
}


export class BasicMaterial extends BaseMaterial{
    constructor(vargs){
        let args = vargs || {};
        args['tag'] = args['tag'] || MaterialTag.unlit;
        let shader = RM.createShader('basic-shader', basicShaderSource.vs, basicShaderSource.ps);
        super(shader, args);

        this.color = args['color'] || [1.0, 1.0, 1.0];
    }

    setup(){
        super.setup();
    }

    update() {
        super.update();
        this.shader.setStruct('u_material', {
            emission: this.color
        });
    }
} 