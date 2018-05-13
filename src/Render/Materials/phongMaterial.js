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
      
        uniform mat4 u_model;
        uniform mat4 u_view;
        uniform mat4 u_perspective;
        uniform mat4 u_mNormal;

        out vec3 normal;
        out vec3 fragPos;

        vec4 when_gt(vec4 x, vec4 y) {
            return max(sign(x - y), 0.0);
        }

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
            vec3 ambient;
            vec3 diffuse;
            vec3 specular;

            float constant;
            float linear;
            float quadratic;
        };
        
        struct Material{
            vec3 ambient;
            vec3 diffuse;
            vec3 specular;
            float shininess;
        };

        uniform Light u_light;
        uniform Material u_material;

        uniform vec3 u_viewPos;

        out vec4 outputColor;
        void main(void) {

            // Ambient color
            vec3 ambient = u_light.ambient * u_material.ambient;

            // Light direction
            vec3 norm = normalize(normal);
            
            vec3 lightDir = (u_light.position - fragPos);
            float lightDistance = length(lightDir);
            lightDir = normalize(lightDir); 

            // diffuse color
            float diff = max(dot(norm, lightDir), 0.0);
            vec3 diffuse = u_light.diffuse * (diff * u_material.diffuse);

            // Specular color

            // Energy conservation for specular shininess
            const float kPi = 3.14159265;
            float kShininess = u_material.shininess;
            float kEnergyConservation = ( 8.0 + kShininess ) / ( 8.0 * kPi );


            vec3 viewDir = normalize(u_viewPos - fragPos);
            vec3 reflectDir = reflect(-lightDir, norm);
            vec3 halfwayDir = normalize(lightDir + viewDir);

            float spec = kEnergyConservation * pow(max(dot(normal, halfwayDir), 0.0), kShininess);

            //float spec = pow( max( dot(normal, halfwayDir), 0.0 ), 32.0 );
            vec3 specular = u_light.specular * (spec * u_material.specular);


            // Attenuation
            float attenuation = 1.0 / (u_light.constant + u_light.linear * lightDistance + u_light.quadratic * (lightDistance * lightDistance));
            ambient *= attenuation;
            diffuse *= attenuation;
            specular *= attenuation;


            vec3 result = ambient + diffuse + specular;
            outputColor = vec4(result, 1.0);

            // Gamma correction
            float gamma = 2.2;
            outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));
        }`,
}


export class PhongMaterial extends BaseMaterial{
    constructor(vargs){
        let args = vargs || {};
        args['tag'] = args['tag'] || MaterialTag.lit;
        let shader = RM.createShader('phong-shader', shaderSource.vs, shaderSource.ps);
        super(shader, args);

        this.light = args['light'];

        this.ambient = args['ambient'] || [1.0, 1.0, 1.0];
        this.diffuse = args['diffuse'] || [1.0, 1.0, 1.0];
        this.specular = args['specular'] || [1.0, 1.0, 1.0];
        this.shininess = args['shininess'] || 8.0;
        this.viewPos = args['viewPos'] || [0.0, 0.0, 0.0];
    }

    setup(){
        super.setup();
    }

    update() { 
        super.update();
        this.shader.setMatrix('u_mNormal', this.mNormal);
        this.shader.setVecf('u_viewPos', this.viewPos);
        this.shader.setStruct('u_light', this.light);
        this.shader.setStruct('u_material', {
            ambient: this.ambient,
            diffuse: this.diffuse,
            specular: this.specular,
            shininess: this.shininess
        });
    }
} 