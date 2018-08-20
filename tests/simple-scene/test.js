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
    cube.attach(new gravitation());

    let sphereMesh = new lux.Geometry.Sphere(1, 16, 16);
    let sphere = new lux.GameObject();
    sphere.attach(new lux.MeshRenderer(sphereMesh, lambertMaterial2));
    sphere.transform.position[0] = 3.0;
    sphere.name = 'sphere';
    sphere.attach(new lux.Rigidbody());
    sphere.attach(new gravitation());
    sphere.getComponent(lux.Rigidbody).mass = 50;


    let cube2 = cube.clone();
    let cube3 = cube.clone();
    cube2.name = 'cube2';
    cube3.transform.position[0] = -3.0;
    cube3.transform.position[1] = -2.0;

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
    scene.add(cube3);
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

function constrain(input, min, max){
    if(input < min) return min;
    else if(input > max ) return max;
    else return input;
}

class gravitation extends lux.BehaviourComponent {
    start() {
        this.rb = this.getComponent(lux.Rigidbody);
        this.otherObjects = this.gameObject.scene.findComponents(lux.Rigidbody);
    }

    fixedUpdate(time) {
        let force = lux.vec3.create();
        for(let other of this.otherObjects) {
            if(other.gameObject != this.gameObject){
                lux.vec3.sub(force, other.transform.position, this.transform.position);
                let len = lux.vec3.len(force);
                len = constrain(len, 1.0, 50.0);
                lux.vec3.normalize(force, force);
                let strength =  (0.4*this.rb.mass * other.mass) / (len * len);
                lux.vec3.scale(force, force, strength);
                this.rb.applyForce(force);
            }
        }
    }
}

$(document).ready(main);