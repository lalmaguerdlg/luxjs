export { renderer } from './Render/webgl'
export { gl } from './Render/webgl'
export { glLoop } from './Render/webgl'
export { AttributePointer } from './Render/Geometry/attributePointer';
export { Vertex } from './Render/Geometry/vertex';
export { VERTEX_LAYOUT } from './Render/Geometry/vertex';
export { VertexArray } from './Render/Geometry/vertexArray'

export { RM } from './Core/resourceManager' // this is sort of a hack for some things.

export { Mesh } from './Render/Geometry/mesh';
export { Geometry } from './Render/Geometry/geometry';

export { Texture, TextureFormat, TexturePresets } from './Render/Textures/texture';
export { Framebuffer } from './Render/Textures/framebuffer';

export { Shader } from './Render/shader'
export { BaseMaterial, MaterialTag } from './Render/Materials/baseMaterial'
export { BasicMaterial } from './Render/Materials/basicMaterial'
export { NormalMaterial } from './Render/Materials/normalMaterial'
export { LambertMaterial } from './Render/Materials/lambertMaterial'
export { PhongMaterial } from './Render/Materials/phongMaterial'
export { TexturedMaterial } from './Render/Materials/texturedMaterial'

export { HDRMaterial } from './Render/Materials/Post Process/hdrMaterial'

export { PointLight } from './Render/Lights/pointLight'

export { Transform } from './Core/transform'
export { GameObject } from './Core/gameObject'

export { Component } from './Core/component'
export { MeshRenderer } from './Render/Components/meshRenderer'
export { RenderSystem } from './Render/rendererSystem'
export { Scene } from './Core/scene'
export { Camera } from './Render/camera'

export { 
    glMatrix, vec2, vec3,
    vec4, quat, mat2, 
    mat2d, mat3, mat4
}  from 'gl-matrix';

