let gl;

let scene;
let renderSystem;

let cube;
let cube2;

function main() {

    lux.renderer.fullscreen(true);

    $('#canvasContainer').append(lux.renderer.domElement);
    gl = lux.gl;

    renderSystem = new lux.RenderSystem();
    scene = new lux.Scene();

    basicMaterial = new lux.BasicMaterial( { color: [1.0, 0.0, 0.0] });

    cubeMesh = new lux.Geometry.Box(1, 1, 1);

    let light = new lux.PointLight({
        position: [0.0, 0.0, 0.0],
        color: [1.0, 0.0, 0.0],
    });

    cube = new lux.GameObject();
    cube2 = new lux.GameObject();
    let meshRenderer = new lux.MeshRenderer(cubeMesh, basicMaterial);
    let meshRenderer2 = new lux.MeshRenderer(cubeMesh, basicMaterial);
    cube.add(meshRenderer);
    cube2.add(meshRenderer2);
    cube2.transform.position[0] = 2;
    cube.add(cube2);

    
    let camera = new lux.Camera();

    lux.mat4.identity(camera.mView);

    lux.mat4.perspective(camera.mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);

    lux.vec3.set(camera.transform.position, 0, 5, 5);
    //lux.vec3.set(cameraPos, 5.0, 5.0, 20.0);
    lux.mat4.lookAt(camera.mView, camera.transform.position, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    scene.add(cube);
    scene.add(light);
    scene.add(camera);

    lux.glLoop(render);
}

let t = 0;

function render(dt){
    t += dt;
    lux.vec3.set(cube.transform.position, Math.sin(t), 0, 0);
    cube.transform.setEuler(0, t * 90, 0);
    lux.vec3.set(cube2.transform.position, Math.sin(t) + 2, 0, 0);
    //cube2.transform.setEuler(0, t * -90, 0);
    renderSystem.render(scene);
}


function getShaderSource(id){
    let shaderScript = $('#'+id);
    if(!shaderScript)
        return "";
    
    let shaderText = shaderScript.text();
    return shaderText;
}


$(document).ready(main);