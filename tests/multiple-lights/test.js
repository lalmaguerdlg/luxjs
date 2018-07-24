let gl;
let scene;
let camera; 

function main() {

    lux.webgl.fullscreen(true);

    $('#canvasContainer').append(lux.webgl.domElement);
    gl = lux.gl;

    scene = new lux.Scene();

    let basicMaterial = new lux.BasicMaterial( { color: [1.0, 0.0, 0.0] });
    
    let phongMaterial = new lux.PhongMaterial({
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2],
        specular: [1.0, 1.0, 1.0],
        shininess: 128 
    });

    lux.webgl.setClearColor(0.1, 0.1, 0.1, 0.0);

    let light = new lux.PointLight({
        position: [0.0, 0.0, 0.0],
        color: [1.0, 0.0, 0.0],
    });
    lights.push(light);

    light = new lux.PointLight({
        position: [0.0, 2.0, 0.0],
        color: [0.0, 1.0, 0.0],
    });
    lights.push(light);

    light = new lux.PointLight({
        position: [2.0, 2.0, 2.0],
        color: [0.0, 0.0, 1.0],
    });
    lights.push(light);


    // Setup Geometry
    let cubeMesh = new lux.Geometry.Box(1.0, 1.0, 1.0);
    let floor = new lux.GameObject();
    floor.transform.scale = [20.0, 1.0, 20.0];
    floor.attach(new lux.MeshRenderer(cubeMesh, phongMaterial));

    scene.add(floor);
    let lightMesh = new lux.MeshRenderer(cubeMesh, basicMaterial);

    for(let i = 0; i < lights.length; i++ ){
        let l = lights[i];
        let go = new lux.GameObject();
        go.name = "light[" + i + "]";
        go.transform.scale = [0.2, 0.2, 0.2];
        
        let mesh = lightMesh.clone();
        mesh.material.color = l.color;
        go.attach(mesh);

        scene.add(go);
        scene.add(l);
    }

    camera = new lux.Camera();

    scene.add(camera);

    lux.useScene(scene);
    lux.simulation.useGravity = false;
    lux.run();
    lux.loop(render);
    lux.renderer.setMSAA(4);
}

let t = 0;

let mView = lux.mat4.create();
let mPerspective = lux.mat4.create();

let lightColor = lux.vec3.create();
let lightPosition = lux.vec3.create();

let lights = [];

let cameraPos = lux.vec3.create();

function render(dt){
    
    
    t += dt.deltaTime;

    lux.mat4.identity(camera.mView);
    lux.mat4.perspective(camera.mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);
    lux.vec3.set(camera.transform.position, Math.sin(t*0.5) * 20.0, 5.0, Math.cos(t*0.5) * 20.0);
    lux.mat4.lookAt(camera.mView, camera.transform.position, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    
    let lightTravel = 3.0
    let sinT = Math.sin(t);
    let cosT = Math.cos(t);
    let index = 0;
    let lightInten = $('#lightIntensity').val();
    let cameraExposure = $('#cameraExposure').val();
    
    
    for(let i = 0; i < lights.length; i++){
        let light = lights[i];
        let go = scene.findObjectWithName("light[" + i + "]");
        light.intensity = lightInten;
        lux.vec3.set(light.position, 
            Math.cos(t + 1 * -(index % 3)) * lightTravel + 5.0, 
            Math.sin(t + 1 * (index % 3)) * lightTravel + 5.0, 
            Math.sin(t + 1 * -(index % 3)) * lightTravel + 5.0);
        go.transform.position = light.position;
        index++;
    }
    
    camera.exposure = cameraExposure;
}


$(document).ready(main);