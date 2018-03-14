var gl;
let color_shader;
let lambert_shader;
let mModel = mat4.create();
let mView = mat4.create();
let mPerspective = mat4.create();

let cubeMesh;

let G_VERTEX_LAYOUT;

function webGLStart(){
    let canvas = $('canvas')[0];
    gl = glInit(canvas);
    
    G_VERTEX_LAYOUT = [
        { 
            name: 'position', 
            attribute: new AttributePointer (0, 3, gl.FLOAT, false, 7 * Float32Array.BYTES_PER_ELEMENT, 0)
        },
        { 
            name: 'color',
            attribute: new AttributePointer (1, 4, gl.FLOAT, false, 7 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT)
        }
    ];

    let vs = getShaderSource("color-vs");
    let fs = getShaderSource("color-fs");
    color_shader = new Shader(vs, fs); 

    vs = getShaderSource("lambert-vs");
    fs = getShaderSource("lambert-fs");
    lambert_shader = new Shader(vs, fs); 

    cubeMesh = Geometry.Box(1, 1, 1);

    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.enable(gl.DEPTH_TEST);
    //gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    
    glLoop(loop);
}

function loop(dt){
    gl.resize();
    drawScene(dt);
}

function getShaderSource(id){
    let shaderScript = $('#'+id);
    if(!shaderScript)
        return "";
    
    let shaderText = shaderScript.text();
    return shaderText;
}

let t = 0;
let lightColor = vec3.create();
let materialColor = vec3.create();

function drawScene(dt) {
    color_shader.bind();
    t += dt;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.identity(mModel);
    mat4.identity(mView);

    mat4.perspective(mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);

    mat4.lookAt(mView, [2.0, 2.0, 3.0], [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    mat4.identity(mModel);
    mat4.translate(mModel, mModel, [1.2, 1.0, 0.0]);
    mat4.scale(mModel, mModel, [0.2, 0.2, 0.2]);
    vec3.set(lightColor, 1.0, 1.0, 1.0);
    vec3.set(materialColor, 1.0, 1.0, 1.0);
    color_shader.setMatrixUniforms(mModel, mView, mPerspective);
    color_shader.setVecf('u_materialColor', materialColor);

    cubeMesh.render(gl.TRIANGLES);
    color_shader.unbind();    
    lambert_shader.bind();

    mat4.identity(mModel);
    mat4.translate(mModel, mModel, [0.0, 0.0, 0.0]);
    vec3.set(lightColor, 1.0, 1.0, 1.0);
    vec3.set(materialColor, 1.0, 0.5, 0.2);
    lambert_shader.setMatrixUniforms(mModel, mView, mPerspective);
    lambert_shader.setVecf('u_lightColor', lightColor);
    lambert_shader.setVecf('u_materialColor', materialColor);

    cubeMesh.render(gl.TRIANGLES);
    lambert_shader.unbind();
}

$(document).ready(webGLStart);