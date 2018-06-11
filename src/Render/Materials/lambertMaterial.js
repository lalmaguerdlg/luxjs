import { BaseMaterial } from './baseMaterial'
import { MaterialTag } from './baseMaterial'
import { RM } from '../../Core/resourceManager'
import { mat4 } from 'gl-matrix'


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
        out vec3 fragPos;
        void main(void) {
            normal = normalize(vec3(u_mNormal * vec4(a_normal, 0.0)));
            fragPos = vec3(u_model * vec4(a_position, 1.0));
            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);
        }`,
    ps: 
        `#version 300 es
        precision mediump float;
        
        in vec3 normal;
        in vec3 fragPos;

        struct Light{
            vec3 position;
            vec3 color;
            float intensity;
        };
        
        struct Material{
            vec3 ambient;
            vec3 diffuse;
        };

        uniform Light u_light;
        uniform Material u_material;

        out vec4 outputColor;
        void main(void) {

            // Ambient color
            vec3 ambient = u_light.intensity * u_light.color * u_material.ambient;

            // Light direction
            vec3 norm = normalize(normal);
            
            vec3 lightDir = (u_light.position - fragPos);
            float lightDistance = length(lightDir);
            lightDir = normalize(lightDir); 

            // diffuse color
            float diff = max(dot(norm, lightDir), 0.0);
            vec3 diffuse = u_light.intensity * u_light.color * (diff * u_material.diffuse);

            // Attenuation
            //float attenuation = 1.0 / (u_light.constant + u_light.linear * lightDistance + u_light.quadratic * (lightDistance * lightDistance));
            float attenuation = 1.0 / (lightDistance * lightDistance);
            ambient *= attenuation;
            diffuse *= attenuation;

            vec3 result = ambient + diffuse;
            outputColor = vec4(result, 1.0);
        }`,
}


export class LambertMaterial extends BaseMaterial{
    constructor(vargs){
        let args = vargs || {};
        args['tag'] = args['tag'] || MaterialTag.lit;
        let shader = RM.createShader('lambert-shader', shaderSource.vs, shaderSource.ps);
        super(shader, args);

        this.light = args['light'];

        this.ambient = args['ambient'] || [1.0, 1.0, 1.0];
        this.diffuse = args['diffuse'] || [1.0, 1.0, 1.0];
        this.mNormal = args['mNormal'] || mat4.create();
    }

    setup(){
        super.setup();
    }
    
    update() {
        super.update();
        this.shader.setStruct('u_light', this.light);
        this.shader.setStruct('u_material', {
            ambient: this.ambient,
            diffuse: this.diffuse,
        });
    }
} 