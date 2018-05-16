import { BaseMaterial } from '../baseMaterial'
import { MaterialTag } from '../baseMaterial'
import { RM } from '../../../Core/resourceManager'

let shaderSource = {
    vs: 
        `#version 300 es
        in vec3 a_position;
        in vec2 a_texCoords;
    
        uniform mat4 u_model;

        out vec2 texCoords;
        void main(void) {
            gl_Position = u_model * vec4(a_position.xy, 0.0, 1.0);
            texCoords = a_texCoords;
        }`,
    ps: 
        `#version 300 es
        precision mediump float;

        in vec2 texCoords;

        uniform sampler2D u_texture;
        uniform float u_exposure;

        out vec4 outColor;
        void main(void) {
            const float gamma = 2.2;

            vec3 hdrColor = texture(u_texture, texCoords).rgb;

            //Reinhard tone mapping
            //vec3 mapped = hdrColor / (hdrColor + vec3(1.0));
            
            // Exposure tone mapping
            vec3 mapped = vec3(1.0) - exp(-hdrColor * u_exposure);
            
            // Gamma correction 
            mapped = pow(mapped, vec3(1.0 / gamma));
          
            outColor = vec4(mapped, 1.0);
        }`,
}


export class HDRMaterial extends BaseMaterial {
    constructor(vargs){
        let args = vargs || {};
        args['tag'] = args['tag'] || MaterialTag.postprocess;
        let shader = RM.createShader('hdr-shader', shaderSource.vs, shaderSource.ps);
        super(shader, args);
        this.exposure = 1.0;
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