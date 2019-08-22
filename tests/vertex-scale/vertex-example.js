/*
let gl;
let light;
let camera;

function main() {

    lux.webgl.fullscreen(true);

    $('#canvasContainer').append(lux.webgl.domElement);
    gl = lux.gl;
    
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    light = new lux.PointLight({
        position: [0.0, 0.0, 0.0],
        ambient: [0.2, 0.2, 0.2],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
    });

    basicMaterial = new lux.BasicMaterial();
    vertexDispMaterial = new VertexDispMaterial({
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2],
        specular: [1.0, 1.0, 1.0],
        shininess: 16
    });
    
    cubeMesh = new lux.Geometry.Box(1, 1, 1);

    lux.webgl.setClearColor(0.1, 0.1, 0.1, 1.0);
    
    lux.glLoop(render);
}

let t = 0;

let mModel = lux.mat4.create();
let mView = lux.mat4.create();
let mPerspective = lux.mat4.create();
let mNormal = lux.mat4.create();

let cameraPos = lux.vec3.create();

function render(dt){
    t += dt;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    lux.mat4.identity(mModel);
    lux.mat4.identity(mView);

    lux.mat4.perspective(mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);


    lux.vec3.set(cameraPos, Math.sin(t*0.5) * 20.0 + 5.0, 5.0, Math.cos(t*0.5) * 20.0);
    //lux.vec3.set(cameraPos, 5.0, 5.0, 20.0);
    lux.mat4.lookAt(mView, cameraPos, [5.0,5.0,0.0], [0.0, 1.0, 0.0]);

    //lux.vec3.set(light.position, Math.sin(t) * 1.5, 1.0, Math.cos(t) * 1.5);
    let maxDist = 4.0;
    let lightTravel = 3.0
    let absSinT = Math.abs(Math.sin(t)) * lightTravel;
    let absCosT = Math.abs(Math.cos(t)) * lightTravel;
    lux.vec3.set(light.position, Math.cos(t) * lightTravel + 5.0, Math.sin(t) * lightTravel + 5.0, 2.0);//Math.sin(t*2.0)*5.0);

    lux.mat4.identity(mModel);
    lux.mat4.translate(mModel, mModel, light.position);
    lux.mat4.scale(mModel, mModel, [0.2, 0.2, 0.2]);

    basicMaterial.setMatrices(mModel, mView, mPerspective);
    basicMaterial.use();

    cubeMesh.render(gl.TRIANGLES);

    vertexDispMaterial.use();
    for(let j = 0; j < 10; j++) {
        for(let i = 0; i < 10; i++) {
            lux.mat4.identity(mModel);
            //lux.mat4.translate(mModel, mModel, [0.0, Math.sin(t), 0.0]);
            lux.mat4.translate(mModel, mModel, [j, i, 0.0]);
            //lux.mat4.rotate(mModel, mModel, -t, [0.0, 1.0, 0.0]);
            
            vertexDispMaterial.setMatrices(mModel, mView, mPerspective);
            vertexDispMaterial.viewPos = cameraPos;
            vertexDispMaterial.influenceRange = maxDist;
            vertexDispMaterial.light = light;
            vertexDispMaterial.update();

            cubeMesh.render(gl.TRIANGLES);
        }
    }
}


function getShaderSource(id){
    let shaderScript = $('#'+id);
    if(!shaderScript)
        return "";
    
    let shaderText = shaderScript.text();
    return shaderText;
}


$(document).ready(main);
*/

let gl;
let light;
let scene;
let camera;

function main() {

    lux.webgl.fullscreen(true);

    $('#canvasContainer').append(lux.webgl.domElement);
    gl = lux.gl;

    scene = new lux.Scene();

    light = new lux.PointLight({
        position: [0.0, 0.0, 0.0],
        color: [1.0, 1.0, 1.0],
        intensity: 10.0
    });

    let basicMaterial = new lux.BasicMaterial();
    let vertexDispMaterial = new VertexDispMaterial({
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2],
        specular: [1.0, 1.0, 1.0],
        shininess: 16,
        light: light,
        influenceRange: 10.0
    });

    let cubeMesh = new lux.Geometry.Box(1.0, 1.0, 1.0);

    let cubeGo = new lux.GameObject();
    cubeGo.attach(new lux.MeshRenderer(cubeMesh, vertexDispMaterial));

    for(let j = 0; j < 10; j++) {
        for(let i = 0; i < 10; i++) {
            for(let k = 0; k < 10; k++) {
                let go = cubeGo.clone();
                go.transform.position = [j - 5, i - 5 ,k - 5];
                scene.add(go);
            }
        }
    }
    

    let lightCube = cubeGo.clone();
    lightCube.getComponent(lux.MeshRenderer).material = basicMaterial;
    lightCube.transform.scale = [0.2, 0.2, 0.2];
    lightCube.transform.position = light.position;
    lightCube.name = "lightCube";


    camera = new lux.Camera();

    scene.add(camera);
    scene.add(lightCube);
    scene.add(light);

    lux.useScene(scene);
    lux.simulation.useGravity = false;
    lux.run();
    lux.loop(render);
    lux.renderer.setMSAA(0);    
}

let t = 0;

let mModel = lux.mat4.create();
let mView = lux.mat4.create();
let mPerspective = lux.mat4.create();
let mNormal = lux.mat4.create();

let cameraPos = lux.vec3.create();

function render(dt){
    t += dt.deltaTime;

    lux.mat4.identity(camera.mView);
    lux.mat4.perspective(camera.mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);
    lux.vec3.set(camera.transform.position, Math.sin(t*0.5) * 20.0, 5.0, Math.cos(t*0.5) * 20.0);
    lux.mat4.lookAt(camera.mView, camera.transform.position, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    
    let lightTravel = 15.0;
    let absSinT = Math.abs(Math.sin(t)) * lightTravel;
    let absCosT = Math.abs(Math.cos(t)) * lightTravel;
    lux.vec3.set(light.position, Math.cos(t * 0.5) * lightTravel, 0.0, 0.0);
       
}

$(document).ready(main);