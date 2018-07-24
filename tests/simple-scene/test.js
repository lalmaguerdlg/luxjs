let gl;

let scene;

function main() {

    lux.webgl.fullscreen(true);

    $('#canvasContainer').append(lux.webgl.domElement);
    gl = lux.gl;

    scene = new lux.Scene();

    let lambertMaterial = new lux.LambertMaterial({
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2]
    });

    let lambertMaterial2 = new lux.PhongMaterial({
        //drawMode: gl.LINE_STRIP,
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2]
    });

    cubeMesh = new lux.Geometry.Box(1, 1, 1);

    let cube = new lux.GameObject();
    cube.name = 'cube';
    cube.attach(new lux.MeshRenderer(cubeMesh, lambertMaterial));
    cube.attach(new lux.Rigidbody());

    let sphereMesh = new lux.Geometry.Sphere(1, 16, 16);
    let sphere = new lux.GameObject();
    sphere.attach(new lux.MeshRenderer(sphereMesh, lambertMaterial2));
    sphere.transform.position[0] = 3.0;
    sphere.name = 'sphere';


    let cube2 = cube.clone();
    cube2.name = 'cube2';

    lux.vec3.set(cube.transform.position, 0, 0, 0);
    lux.vec3.set(cube2.transform.position, 0, 1.0, 0.5);

    cube.transform.setEuler(0, 180, 0);


    let light = new lux.PointLight({
        position: [0.0, 2.0, 0.0],
        color: [1.0, 0.0, 1.0],
        intensity: 0.1
    });

    let light2 = new lux.PointLight({
        position: [0.0, 0.0, 0.0],
        color: [0.0, 1.0, 1.0],
        intensity: 0.3
    });

    let camera = new lux.Camera();
    lux.mat4.identity(camera.mView);
    lux.mat4.perspective(camera.mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);
    lux.vec3.set(camera.transform.position, 0, 5, 5);
    lux.mat4.lookAt(camera.mView, camera.transform.position, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    scene.add(cube);
    scene.add(cube2);
    scene.add(sphere);
    scene.add(light);
    scene.add(light2);
    scene.add(camera);

    lux.useScene(scene);
    lux.simulation.useGravity = false;
    lux.run();
    lux.fixedLoop(render);
    lux.renderer.setMSAA(4);
}

let t = 0;

function render(dt){
    t += dt.fixedTime;

    let cube = scene.findObjectWithName('cube');
    let cube2 = scene.findObjectWithName('cube2');
    let sphere = scene.findObjectWithName('sphere');
    
    if(cube && cube2){
        let distance = lux.vec3.create();
        lux.vec3.sub(distance, cube2.transform.position, cube.transform.position);
        cube.getComponent(lux.Rigidbody).applyForce(distance);

        lux.vec3.sub(distance, cube.transform.position,cube2.transform.position);
        cube2.getComponent(lux.Rigidbody).applyForce(distance);
        
    }
    sphere.transform.setEuler(0, t * 90, 0);
    lux.vec3.set(sphere.transform.position, Math.sin(t) + 2, 0, 0);
}


$(document).ready(main);