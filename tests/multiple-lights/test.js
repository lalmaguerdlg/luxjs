let gl;
let basicMaterial;
let normalMaterial;
let lambertMaterial;
let phongMaterial;
let texturedMaterial;

let hdrMaterial;

let framebuffer;
let screenQuad;


function resize(){
    if(framebuffer) framebuffer.dispose();
    framebuffer = new lux.Framebuffer(lux.webgl.viewport.width, lux.webgl.viewport.height);
    let fbFormat = lux.TexturePresets.FB_HDR_COLOR();
    framebuffer.addColor(lux.AttachmentType.TEXTURE, fbFormat);
    framebuffer.addDepth(lux.AttachmentType.TEXTURE);
}

function main() {

    lux.webgl.fullscreen(true);

    $('#canvasContainer').append(lux.webgl.domElement);
    gl = lux.gl;

    lux.webgl.onResizeCallback = resize;
    
    framebuffer = new lux.Framebuffer(lux.webgl.viewport.width, lux.webgl.viewport.height);
    let fbFormat = lux.TexturePresets.FB_HDR_COLOR();
    framebuffer.addColor(lux.AttachmentType.TEXTURE, fbFormat);
    framebuffer.addDepth(lux.AttachmentType.TEXTURE);

    screenQuad = new lux.Geometry.Quad(2.0);

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
        shininess: 128 
    });

    texturedMaterial = new lux.TexturedMaterial();

    /*phongMaterial = new lux.PhongMaterial({ 
        ambient: [1.0, 1.0, 1.0],
        diffuse: [1.0, 1.0, 1.0],
        specular: [1.0, 1.0, 1.0],
        shininess: 32 
    });*/

    hdrMaterial = new lux.HDRMaterial();

    cubeMesh = new lux.Geometry.Box(1, 1, 1);

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

    lux.loop(render);
}

let t = 0;

let mModel = lux.mat4.create();
let mView = lux.mat4.create();
let mPerspective = lux.mat4.create();
let mNormal = lux.mat4.create();

let lightColor = lux.vec3.create();
let lightPosition = lux.vec3.create();

let lights = [];

let cameraPos = lux.vec3.create();

function render(dt){
    
    framebuffer.bind();
    t += dt;
    lux.webgl.setClearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    lux.mat4.identity(mModel);
    lux.mat4.identity(mView);

    lux.mat4.perspective(mPerspective, 45, gl.canvas.width / gl.canvas.height, 0.1, 100.0);

    lux.vec3.set(cameraPos, Math.sin(t*0.5) * 20.0, 5.0, Math.cos(t*0.5) * 20.0);
    //lux.vec3.set(cameraPos, 5.0, 5.0, 20.0);
    lux.mat4.lookAt(mView, cameraPos, [0.0,0.0,0.0], [0.0, 1.0, 0.0]);

    //lux.vec3.set(light.position, Math.sin(t) * 1.5, 1.0, Math.cos(t) * 1.5);
    let lightTravel = 3.0
    let sinT = Math.sin(t);
    let cosT = Math.cos(t);
    let index = 0;
    let lightInten = $('#lightIntensity').val();
    
    //lux.vec3.set(lights[0].position, Math.cos(t) * lightTravel + 5.0, Math.sin(t) * lightTravel + 5.0, Math.sin(t)*5.0);    
    
    for(let light of lights){
        /*
        light.range = lightDistance;
        light.calculateAttenuation();
        */
       light.intensity = lightInten;
        
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LESS);
        gl.disable(gl.BLEND);
        lux.vec3.set(light.position, 
            Math.cos(t + 1 * -(index % 3)) * lightTravel + 5.0, 
            Math.sin(t + 1 * (index % 3)) * lightTravel - 5.0, 
            Math.sin(t + 1 * -(index % 3)) * lightTravel + 5.0);            

        lux.mat4.identity(mModel);
        lux.mat4.translate(mModel, mModel, light.position);
        lux.mat4.scale(mModel, mModel, [0.2, 0.2, 0.2]);
        
        basicMaterial.setMatrices(mModel, mView, mPerspective);
        basicMaterial.color = light.color;
        basicMaterial.use();
        cubeMesh.render(gl.TRIANGLES);
            
        lux.mat4.identity(mModel);
        //lux.mat4.translate(mModel, mModel, [0.0, Math.sin(t), 0.0]);
        lux.mat4.translate(mModel, mModel, [0.0, 0.0, 0.0]);
        //lux.mat4.rotate(mModel, mModel, t, [0.0, 1.0, 0.0]);
        lux.mat4.scale(mModel, mModel, [20.0, 1.0, 20.0]);
        
        if(index > 0){
            gl.enable(gl.BLEND);
            //gl.disable(gl.DEPTH_TEST);
            gl.blendFunc(gl.ONE, gl.ONE);
            gl.depthFunc(gl.LEQUAL);
        }


        phongMaterial.setMatrices(mModel, mView, mPerspective);
        phongMaterial.viewPos = cameraPos;
        phongMaterial.light = light;
        phongMaterial.use();

        cubeMesh.render(gl.TRIANGLES);
        index++;
    }
    framebuffer.unbind();


    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);
    gl.disable(gl.BLEND);
    lux.webgl.setClearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    let cameraExposure = $('#cameraExposure').val();

    lux.mat4.identity(mModel);
    lux.mat4.translate(mModel, mModel, [0.0, 0.0, 0.0]);
    hdrMaterial.setMatrices(mModel, mView, mPerspective);
    hdrMaterial.exposure = cameraExposure;
    hdrMaterial.use();
    framebuffer.attachments.color[0].use(0);
    screenQuad.render(gl.TRIANGLES);

    /*
    lux.mat4.identity(mModel);
    lux.mat4.translate(mModel, mModel, [5.0, 0.0, -0.1]);
    lux.mat4.rotate(mModel, mModel, t, [1.0, 0.0, 0.0]);
    lux.mat4.scale(mModel, mModel, [10.0, 10.0, 10.0]);
    */
    /*texturedMaterial.setMatrices(mModel, mView, mPerspective);
    texturedMaterial.exposure = cameraExposure;
    texturedMaterial.use();
    framebuffer.textures.color[0].use(0);
    cubeMesh.render(gl.TRIANGLES);*/
    //screenQuad.render(gl.TRIANGLES);
    /*phongMaterial.setMatrices(mModel, mView, mPerspective);
    phongMaterial.viewPos = cameraPos;
    phongMaterial.light = lights[0];
    phongMaterial.use();

    cubeMesh.render(gl.TRIANGLES);*/
}


function getShaderSource(id){
    let shaderScript = $('#'+id);
    if(!shaderScript)
        return "";
    
    let shaderText = shaderScript.text();
    return shaderText;
}


$(document).ready(main);