import { BaseMaterial } from './baseMaterial'
import { MaterialTag } from './baseMaterial'
import { RM } from '../../Core/resourceManager'
import { mat4 } from 'gl-matrix'

let shaderSource = {
    vs: 
        `#version 300 es
        precision mediump float;

        in vec3 a_position;
        in vec3 a_normal;
        in vec2 a_texCoords;
      
        uniform mat4 u_model;
        uniform mat4 u_view;
        uniform mat4 u_perspective;
        uniform mat4 u_mNormal;

        out vec3 normal;
        out vec3 fragPos;
        out vec2 texCoords;

        void main(void) {
            fragPos = vec3(u_model * vec4(a_position, 1.0));
            texCoords = a_texCoords;

            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);
        }`,
    ps: 
        `#version 300 es
        precision mediump float;
        
        in vec3 fragPos;
        in vec2 texCoords;

        uniform sampler2D u_texture;
        uniform float u_exposure;

        out vec4 outputColor;
        void main(void) {

            const float gamma = 2.2;

            vec3 hdrColor = texture(u_texture, texCoords).rgb;
            
            // Exposure tone mapping
            vec3 mapped = vec3(1.0) - exp(-hdrColor * u_exposure);
            
            // Gamma correction 
            mapped = pow(mapped, vec3(1.0 / gamma));

            outputColor = vec4(mapped, 1.0);
        }`,
}


export class TexturedMaterial extends BaseMaterial{
    constructor(vargs){
        let args = vargs || {};
        args['tag'] = args['tag'] || MaterialTag.unlit;
        let shader = RM.createShader('textured-shader', shaderSource.vs, shaderSource.ps);
        super(shader, args);
        this.textures = 1;
        this.exposure = 1.0
    }

    setup(){
        super.setup();
    }

    update() { 
        super.update();
        this.shader.setInt('u_texture', 0);
        this.shader.setFloat('u_exposure', this.exposure);
    }
} 