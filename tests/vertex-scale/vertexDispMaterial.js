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

        struct Light{
            vec3 position;

            vec3 ambient;
            vec3 diffuse;
            vec3 specular;
        };

        uniform Light u_light;

        uniform vec3 u_viewPos;

        uniform float u_influenceRange;

        out vec3 normal;
        out vec3 fragPos;

        vec4 when_gt(vec4 x, vec4 y) {
            return max(sign(x - y), 0.0);
        }

        void main(void) {

            vec3 vertex = a_position;
            vec4 objectPosition = u_model * vec4(vec3(0.0), 1.0);
            vec4 worldSpaceVertex = u_model * vec4(vertex, 1.0);
            vec3 dir = (objectPosition.xyz - u_light.position.xyz);
            float dist = min(length(dir) / u_influenceRange, 1.0);
            dir = normalize(dir);
            float disp = mix( 1.0, 0.0, dist);
            vec3 scale = vec3(mix(0.0, 1.0, dist));
            vec3 translation = vec3(disp * 5.0) * dir;
            //vertex = vertex.xyz * scale;
            vertex = (vertex * scale) + translation;
            gl_Position = u_perspective * u_view * u_model * vec4(vertex, 1.0);

            normal = vec3(u_mNormal * vec4(a_normal, 0.0));
            fragPos = vec3(u_model * vec4(a_position, 1.0));
            
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
            vec3 lightDir = normalize(u_light.position - fragPos);

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
            vec3 specular = u_light.specular * (spec * u_material.diffuse);

            vec3 result = ambient + diffuse + specular;
            outputColor = vec4(result, 1.0);

            // Gamma correction
            float gamma = 2.2;
            outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));
        }`,
}


class VertexDispMaterial extends lux.BaseMaterial{
    constructor(vargs){
        let args = vargs || {};
        args['tag'] = args['tag'] || lux.MaterialTag.lit;
        let shader = lux.RM.createShader('vertex-displacement-shader', shaderSource.vs, shaderSource.ps);
        super(shader, args);

        this.light = args['light'];

        this.ambient = args['ambient'] || [1.0, 1.0, 1.0];
        this.diffuse = args['diffuse'] || [1.0, 1.0, 1.0];
        this.specular = args['specular'] || [1.0, 1.0, 1.0];
        this.shininess = args['shininess'] || 8.0;
        this.viewPos = args['viewPos'] || [0.0, 0.0, 0.0];
        this.influenceRange = args['influenceRange'] || 0.0;
    }

    setup(){
        super.setup();
    }

    update() {
        super.update();
        this.shader.setVecf('u_viewPos', this.viewPos);
        this.shader.setFloat('u_influenceRange', this.influenceRange);
        this.shader.setStruct('u_light', this.light);
        this.shader.setStruct('u_material', {
            ambient: this.ambient,
            diffuse: this.diffuse,
            specular: this.specular,
            shininess: this.shininess
        });
    }
} 