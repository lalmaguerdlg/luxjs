let gl;

let scene;
let forwardRenderer;

let cube;
let cube2;
let cube3;

function main() {

    lux.webgl.fullscreen(true);

    $('#canvasContainer').append(lux.webgl.domElement);
    gl = lux.gl;

    forwardRenderer = new lux.ForwardRenderer();
    scene = new lux.Scene();

    basicMaterial = new lux.BasicMaterial( { color: [1.0, 0.0, 0.0] });

    cubeMesh = new lux.Geometry.Box(1, 1, 1);

    let light = new lux.PointLight({
        position: [0.0, 0.0, 0.0],
        color: [1.0, 0.0, 0.0],
    });

    cube = new lux.GameObject();
    cube2 = new lux.GameObject();
    cube3 = new lux.GameObject();

    cube.attach(new lux.MeshRenderer(cubeMesh, basicMaterial));
    cube.attach(new lux.Rigidbody());
    cube2.attach(new lux.MeshRenderer(cubeMesh, basicMaterial));
    cube2.attach(new lux.Rigidbody());
    cube3.attach(new lux.MeshRenderer(cubeMesh, basicMaterial));
    cube3.attach(new lux.Rigidbody());

    cube2.transform.position[0] = 2;
    cube3.transform.position[1] = 2;

    cube.add(cube2);
    cube2.add(cube3);

    
    let camera = new lux.Camera();

    lux.mat4.identity(camera.mView);

    lux.mat4.perspective(camera.mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);

    lux.vec3.set(camera.transform.position, 0, 5, 5);
    //lux.vec3.set(cameraPos, 5.0, 5.0, 20.0);
    lux.mat4.lookAt(camera.mView, camera.transform.position, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    scene.add(cube);
    scene.add(light);
    scene.add(camera);

    
    lux.luxCore.useScene(scene);

    //lux.physicsSimulation.gravity = lux.vec3.create();
    lux.luxCore.run();

    //lux.glLoop(render);
}

let t = 0;

function render(dt){
    t += dt;
    lux.vec3.set(cube.transform.position, Math.sin(t), 0, 0);
    cube.transform.setEuler(0, t * 90, 0);
    lux.vec3.set(cube2.transform.position, Math.sin(t) + 2, 0, 0);
    //cube2.transform.setEuler(0, t * -90, 0);
    forwardRenderer.render(scene);
}


$(document).ready(main);