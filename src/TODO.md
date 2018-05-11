# TODO list:

## Core
- Finish **Transform** class to include quaternion as a rotation method.
- Add parentship between transforms to combine transformations
- Add **GameObject** class as a container to store a list of components and childs to update and manage
- Add **Component** class as a base class to be able to create different components where the logic would be.
- Add **Particle Systems**
- Add **Prefab** class or a way to store content


## Rendering
- Add **Textures**
- Add **MeshRenderer** component class to combine Mesh and Material and link Transform variables
- Add **WebGLRenderer | Renderer | SceneRenderer** class to render a given scene
- Add **Camera** class
- Add **WebGLConfig | WebGLState | RendererState** class to place all of the webgl state
- Manage different states for different shaders failling back to RendererState default state 

- Add support for **Geometry shader** for futher materials
- Add **Geometry.Line | Geometry.MeshLine** class to create complex line and curves
- Add **LineMaterial** class for rendering lines using geometry shader to expand lines using vertex normals.

## Physics
- Add **Raycast**
- Add **Raycast** from camera.
- Add **RigidBody** component class to handle simple motion using netwon laws of motion.
- Add simple collision logic
- Communicate collision events to subscribed component methods


## Game
- Add **Vehicle** component class to handle steering behaviour
- Add camera movement