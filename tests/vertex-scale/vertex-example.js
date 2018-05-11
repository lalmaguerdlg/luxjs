let gl;
let basicMaterial;
let vertexDispMaterial;

let light;

function main() {

    lux.renderer.fullscreen(true);

    $('#canvasContainer').append(lux.renderer.domElement);
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

    lux.renderer.setClearColor(0.1, 0.1, 0.1, 1.0);
    
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