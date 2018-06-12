// --------------------------------- Core

export { 
    core, simulation, renderer,
    useScene, swapScene, run, loop, 
} from './Core/core';


export { RM } from './Core/resourceManager' // this is sort of a hack for some things.

export { Transform } from './Core/transform'
export { GameObject } from './Core/gameObject'

export { Component, PhysicsComponent, BehaviourComponent, RenderComponent } from './Core/component'
export { Scene } from './Core/scene'


export { 
    glMatrix, vec2, vec3,
    vec4, quat, mat2, 
    mat2d, mat3, mat4
}  from 'gl-matrix';


// -------------------------------- Physics

export { PhysicsSimulation } from './Physics/physicsSimulation'
export { Rigidbody } from './Physics/Components/rigidbody'

// ----------------------------------------------- Rendering

export { webgl } from './Render/webgl'
export { gl } from './Render/webgl'
export { glLoop } from './Render/webgl'
export { AttributePointer } from './Render/Geometry/attributePointer';
export { Vertex } from './Render/Geometry/vertex';
export { VERTEX_LAYOUT } from './Render/Geometry/vertex';
export { VertexArray } from './Render/Geometry/vertexArray'

export { Mesh } from './Render/Geometry/mesh';
export { Geometry } from './Render/Geometry/geometry';

export { Texture, TextureFormat, TexturePresets } from './Render/Textures/texture';
export { RenderBuffer, RenderBufferFormat } from './Render/Textures/renderbuffer';
export { Framebuffer, AttachmentType } from './Render/Textures/framebuffer';

export { Shader } from './Render/shader'
export { BaseMaterial, MaterialTag } from './Render/Materials/baseMaterial'
export { BasicMaterial } from './Render/Materials/basicMaterial'
export { NormalMaterial } from './Render/Materials/normalMaterial'
export { LambertMaterial } from './Render/Materials/lambertMaterial'
export { PhongMaterial } from './Render/Materials/phongMaterial'
export { TexturedMaterial } from './Render/Materials/texturedMaterial'

export { HDRMaterial } from './Render/Materials/Post Process/hdrMaterial'

export { PointLight } from './Render/Lights/pointLight'

export { Camera } from './Render/camera'

export { MeshRenderer } from './Render/Components/meshRenderer'
export { RenderGroups } from './Render/Renderers/renderGroups'
export { ForwardRenderer } from './Render/Renderers/forwardRenderer'
