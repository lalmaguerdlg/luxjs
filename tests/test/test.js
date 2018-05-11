let gl;
let basicMaterial;
let normalMaterial;
let lambertMaterial;
let phongMaterial;

function main() {

    lux.renderer.fullscreen(true);

    $('#canvasContainer').append(lux.renderer.domElement);
    gl = lux.gl;

    basicMaterial = new lux.BasicMaterial( { color: [1.0, 0.0, 0.0] });

    normalMaterial = new lux.NormalMaterial();

    lambertMaterial = new lux.LambertMaterial({
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2]
    });
    
    phongMaterial = new lux.PhongMaterial({ 
        ambient: [1.0, 0.5, 0.2],
        diffuse: [1.0, 0.5, 0.2],
        specular: [1.0, 1.0, 1.0],
        shininess: 32 
    });

    cubeMesh = new lux.Geometry.Box(1, 1, 1);

    lux.renderer.setClearColor(0.1, 0.1, 0.1, 1.0);
    
    
    lux.glLoop(render);
}

let t = 0;

let mModel = lux.mat4.create();
let mView = lux.mat4.create();
let mPerspective = lux.mat4.create();
let mNormal = lux.mat4.create();

let lightColor = lux.vec3.create();
let lightPosition = lux.vec3.create();

let light = new lux.PointLight({
    position: [0.0, 0.0, 0.0],
    ambient: [0.2, 0.2, 0.2],
    diffuse: [1.0, 1.0, 1.0],
    specular: [1.0, 1.0, 1.0],
});

let cameraPos = lux.vec3.create();

let orange_material = {
    ambient: [1.0, 0.5, 0.2],
    diffuse: [1.0, 0.5, 0.2],
    specular: [1.0, 1.0, 1.0],
    shininess: 8
}


function render(dt){
    
    t += dt;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    lux.mat4.identity(mModel);
    lux.mat4.identity(mView);

    lux.mat4.perspective(mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);


    lux.vec3.set(cameraPos, Math.sin(t*0.5) * 20.0, 5.0, Math.cos(t*0.5) * 20.0);
    //lux.vec3.set(cameraPos, 5.0, 5.0, 20.0);
    lux.mat4.lookAt(mView, cameraPos, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    //lux.vec3.set(light.position, Math.sin(t) * 1.5, 1.0, Math.cos(t) * 1.5);
    let lightTravel = 3.0
    let absSinT = Math.abs(Math.sin(t)) * lightTravel;
    let absCosT = Math.abs(Math.cos(t)) * lightTravel;
    lux.vec3.set(light.position, Math.cos(t) * lightTravel + 5.0, Math.sin(t) * lightTravel + 5.0, Math.sin(t)*5.0);

    lux.mat4.identity(mModel);
    lux.mat4.translate(mModel, mModel, light.position);
    lux.mat4.scale(mModel, mModel, [0.2, 0.2, 0.2]);
    
    
    basicMaterial.setMatrices(mModel, mView, mPerspective);
    basicMaterial.color = light.specular;
    basicMaterial.use();
    cubeMesh.render(gl.TRIANGLES);
        
    lux.mat4.identity(mModel);
    //lux.mat4.translate(mModel, mModel, [0.0, Math.sin(t), 0.0]);
    lux.mat4.translate(mModel, mModel, [0.0, 0.0, 0.0]);
    //lux.mat4.rotate(mModel, mModel, t, [0.0, 1.0, 0.0]);
    lux.mat4.scale(mModel, mModel, [20.0, 1.0, 20.0]);
    
    phongMaterial.setMatrices(mModel, mView, mPerspective);
    phongMaterial.viewPos = cameraPos;
    phongMaterial.light = light;
    phongMaterial.use();

    
    /*
    normalMaterial.setMatrices(mModel, mView, mPerspective);
    normalMaterial.use();
    */

    /*
    lambertMaterial.setMatrices(mModel, mView, mPerspective);
    lambertMaterial.light = light;
    lambertMaterial.use();
    */

    cubeMesh.render(gl.TRIANGLES);
}


function getShaderSource(id){
    let shaderScript = $('#'+id);
    if(!shaderScript)
        return "";
    
    let shaderText = shaderScript.text();
    return shaderText;
}


$(document).ready(main);