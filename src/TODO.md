# TODO list:

## Core
- ~~Finish **Transform** class to include quaternion as a rotation method.~~
- ~~Add parentship between transforms to combine transformations~~
- ~~Add **GameObject** class as a container to store a list of components and childs to update and manage~~
- ~~Add **Component** class as a base class to be able to create different components where the logic would be.~~
- Add **Prefab** class or a way to store content
- Add a way to clone Game Objects


## Rendering
- ~~Add **Textures**~~
- ~~Add **MeshRenderer** component class to combine Mesh and Material~~ and link Transform variables
- ~~Add **WebGLRenderer | Renderer | SceneRenderer** class to render a given scene~~
- ~~Add **Camera** class~~
- Thinkg about using forward or deferred rendering
- ~~Add **WebGLConfig | WebGLState | RendererState** class to place all of the webgl state~~
- Manage different webgl states for different shaders failling back to RendererState default state
- **NOT POSIBLE ON WEBGL** ~~Add support for **Geometry shader** for futher materials~~
- Add **Geometry.Line | Geometry.MeshLine** class to create complex line and curves
- Add **LineMaterial** class for rendering lines using geometry shader to expand lines using vertex normals.
- Improve **Camera** class
- Add **Particle Systems**
- Add **Post proceess** pipeline.
- Add **Bloom** effect.


## Physics
- Add **Raycast**
- Add **Raycast** from camera.
- ~~Add **RigidBody** component class to handle simple motion using netwon laws of motion.~~
- Add simple collision logic
- Communicate collision events to subscribed component methods
- Fix my timestep

## Game
- Add **Vehicle** component class to handle steering behaviour
- Add camera movement



## Port to C++
- The dream