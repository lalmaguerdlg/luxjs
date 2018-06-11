let gl;

let scene;

function main() {

    lux.webgl.fullscreen(true);

    $('#canvasContainer').append(lux.webgl.domElement);
    gl = lux.gl;

    scene = new lux.Scene();

    let basicMaterial = new lux.BasicMaterial( { color: [1.0, 0.0, 0.0] });

    let lambertMaterial = new lux.LambertMaterial({
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2]
    });

    cubeMesh = new lux.Geometry.Box(1, 1, 1);

    let cube = new lux.GameObject();
    cube.name = 'cube';
    //cube2 = new lux.GameObject();
    //cube3 = new lux.GameObject();

    cube.attach(new lux.MeshRenderer(cubeMesh, basicMaterial));
    cube.attach(new lux.Rigidbody());


    //cube2.attach(new lux.MeshRenderer(cubeMesh, basicMaterial));
    //cube2.attach(new lux.Rigidbody());
    //cube3.attach(new lux.MeshRenderer(cubeMesh, basicMaterial));
    //cube3.attach(new lux.Rigidbody());


    let cube2 = cube.clone();
    cube2.name = 'cube2';
    cube2.getComponent(lux.MeshRenderer).material = lambertMaterial;

    lux.vec3.set(cube.transform.position, 0, 0, 0);
    lux.vec3.set(cube2.transform.position, 0, 1.0, 0.5);
    //cube.transform.position[2] = 2;

    cube.transform.setEuler(0, 180, 0);
    //cube.transform.setScale([1.0, 0.5, 1.0]);
    //cube2.transform.setScale([0.5, 0.5, 0.5]);


    let light = new lux.PointLight({
        position: [0.0, 2.0, 0.0],
        color: [1.0, 0.0, 1.0],
    });

    let light2 = new lux.PointLight({
        position: [0.0, 0.0, 0.0],
        color: [0.0, 1.0, 1.0],
    });

    let camera = new lux.Camera();

    lux.mat4.identity(camera.mView);

    lux.mat4.perspective(camera.mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);

    lux.vec3.set(camera.transform.position, 0, 5, 5);
    //lux.vec3.set(cameraPos, 5.0, 5.0, 20.0);
    lux.mat4.lookAt(camera.mView, camera.transform.position, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    scene.add(cube);
    scene.add(cube2);
    scene.add(light);
    scene.add(light2);
    scene.add(camera);

    //cube.getComponent(lux.Rigidbody).applyForce([-5.0, 20.0, 0.0]);
    //cube2.getComponent(lux.Rigidbody).applyForce([5.0, 20.0, 0.0]);

    lux.luxCore.useScene(scene);

    lux.physicsSimulation.useGravity = false;
    lux.luxCore.run();

    lux.glLoop(render);
}

let t = 0;

function render(dt){
    t += dt;

    let cube = scene.findObjectWithName('cube');
    let cube2 = scene.findObjectWithName('cube2');
    
    /*
    let distance = lux.vec3.create();
    lux.vec3.sub(distance, cube2.transform.position, cube.transform.position);
    cube.getComponent(lux.Rigidbody).applyForce(distance);

    lux.vec3.sub(distance, cube.transform.position,cube2.transform.position);
    cube2.getComponent(lux.Rigidbody).applyForce(distance);
    */


    //lux.vec3.set(cube.transform.position, Math.sin(t), 0, 0);
    //cube.transform.setEuler(0, t * 90, 0);
    //lux.vec3.set(cube2.transform.position, Math.sin(t) + 2, 0, 0);
    //cube2.transform.setEuler(0, t * -90, 0);
}


$(document).ready(main);