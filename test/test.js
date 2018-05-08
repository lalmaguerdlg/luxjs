let gl;
let color_shader;
let normal_shader;
let lambert_shader;
let phong_shader;

function main() {

    lux.renderer.fullscreen(true);

    $('#canvasContainer').append(lux.renderer.domElement);
    gl = lux.gl;
    
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    let vs = getShaderSource("color-vs");
    let fs = getShaderSource("color-fs");
    color_shader = new lux.Shader(vs, fs);

    vs = getShaderSource("normal-color-vs");
    fs = getShaderSource("normal-color-fs");
    normal_shader = new lux.Shader(vs, fs);
    
    vs = getShaderSource("lambert-vs");
    fs = getShaderSource("lambert-fs");
    lambert_shader = new lux.Shader(vs, fs);

    vs = getShaderSource("phong-vs");
    fs = getShaderSource("phong-fs");
    phong_shader = new lux.Shader(vs, fs);

    cubeMesh = new lux.Geometry.Box(1, 1, 1);

    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.cullFace(gl.BACK);
    
    lux.glLoop(render);
}

let t = 0;

let mModel = lux.mat4.create();
let mView = lux.mat4.create();
let mPerspective = lux.mat4.create();
let mNormal = lux.mat4.create();

let lightColor = lux.vec3.create();
let lightPosition = lux.vec3.create();
let materialColor = lux.vec3.create();
let cameraPos = lux.vec3.create();


function render(dt){
    color_shader.bind();
    t += dt;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    lux.mat4.identity(mModel);
    lux.mat4.identity(mView);

    lux.mat4.perspective(mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);


    lux.vec3.set(cameraPos, 2.0, 2.0, 3.0);
    lux.mat4.lookAt(mView, cameraPos, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    lux.vec3.set(lightPosition, Math.sin(t) * 1.5, 1.0, Math.cos(t) * 1.5);

    lux.mat4.identity(mModel);
    lux.mat4.translate(mModel, mModel, lightPosition);
    lux.mat4.scale(mModel, mModel, [0.2, 0.2, 0.2]);
    lux.vec3.set(lightColor, 1.0, 1.0, 1.0);
    color_shader.setMatrixUniforms(mModel, mView, mPerspective);
    color_shader.setVecf('u_materialColor', lightColor);

    cubeMesh.render(gl.TRIANGLES);
    color_shader.unbind();    
    
    lux.mat4.identity(mModel);
    lux.mat4.translate(mModel, mModel, [0.0, Math.sin(t), 0.0]);
    lux.mat4.rotate(mModel, mModel, -t, [0.0, 1.0, 0.0]);
    lux.vec3.set(materialColor, 1.0, 0.5, 0.2);
    lux.mat4.invert(mNormal, mModel);
    lux.mat4.transpose(mNormal, mNormal);
    phong_shader.bind();
    phong_shader.setMatrixUniforms(mModel, mView, mPerspective);
    phong_shader.setMatrix('u_mNormal', mNormal);
    phong_shader.setVecf('u_lightPos', lightPosition);
    phong_shader.setVecf('u_lightColor', lightColor);
    phong_shader.setVecf('u_viewPos', cameraPos);
    phong_shader.setVecf('u_materialColor', materialColor);
    phong_shader.setVecf('u_materialColor', materialColor);
    

    cubeMesh.render(gl.TRIANGLES);
    phong_shader.unbind();
}


function getShaderSource(id){
    let shaderScript = $('#'+id);
    if(!shaderScript)
        return "";
    
    let shaderText = shaderScript.text();
    return shaderText;
}


$(document).ready(main);