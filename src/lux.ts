// --------------------------------- Core

export { 
    LoopCallback,
    core, simulation, renderer,
    useScene, swapScene, run, loop, fixedLoop,
} from './Core/core';


export { RM } from './Core/resourceManager' // this is sort of a hack for some things.

export { Transform } from './Core/transform'
export { GameObject } from './Core/gameObject'

export { Component, PhysicsComponent, BehaviourComponent, RenderComponent } from './Core/component'
export { Scene } from './Core/scene'


export { ITime } from './Core/time'


export { 
    glMatrix, vec2, vec3,
    vec4, quat, mat2, 
    mat2d, mat3, mat4
}  from 'gl-matrix';


// -------------------------------- Physics

export { PhysicsSimulation } from './Physics/physicsSimulation'
export { Rigidbody } from './Physics/Components/rigidbody'

// ----------------------------------------------- Rendering

export { webgl, gl } from './Graphics/webgl'
export { AttributePointer } from './Graphics/Geometry/attributePointer';
export { Vertex, Attribute, VertexLayoutItem, VERTEX_LAYOUT } from './Graphics/Geometry/vertex';
export { VertexArray } from './Graphics/Geometry/vertexArray'

export { Mesh } from './Graphics/Geometry/mesh';
export { Geometry } from './Graphics/Geometry/geometry';

export { Texture, TextureFormat, TexturePresets } from './Graphics/Textures/texture';
export { RenderBuffer, RenderBufferFormat } from './Graphics/Textures/renderbuffer';
export { Framebuffer, AttachmentType } from './Graphics/Textures/framebuffer';

export { Shader } from './Graphics/shader'
export { BaseMaterial, MaterialTag } from './Graphics/Materials/baseMaterial'
export { BasicMaterial } from './Graphics/Materials/basicMaterial'
export { NormalMaterial } from './Graphics/Materials/normalMaterial'
export { LambertMaterial } from './Graphics/Materials/lambertMaterial'
export { PhongMaterial } from './Graphics/Materials/phongMaterial'

export { HDRMaterial } from './Graphics/Materials/Post Process/hdrMaterial'

export { PointLight } from './Graphics/Lights/pointLight'

export { Camera } from './Graphics/camera'

export { MeshRenderer } from './Graphics/Components/meshRenderer'
export { RenderGroups } from './Graphics/Renderers/renderGroups'
export { ForwardRenderer } from './Graphics/Renderers/forwardRenderer'