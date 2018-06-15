import { BaseMaterial, BaseMaterialArgs } from '../baseMaterial'
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

        uniform sampler2D u_depthTexture;

        out vec4 outColor;
        void main(void) {
            float depthValue = texture(u_depthTexture, texCoords).r;
            outColor = vec4(vec3(depthValue), 1.0);
        }`,
}


export class DepthMaterial extends BaseMaterial {
    constructor(args ?: BaseMaterialArgs){
        args = args = {};
        args.tag = MaterialTag.postprocess;
        let shader = RM.createShader('depth-shader', shaderSource.vs, shaderSource.ps);
        super(shader, args);
    }

    setup(){
        super.setup();
    }

    update() {
        super.update();
        this.shader.setInt('u_depthTexture', 0);
    }
} 