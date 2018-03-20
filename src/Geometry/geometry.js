import { Vertex } from './vertex.js';
import { VertexArray } from './vertexArray.js';
import { Mesh}  from './mesh.js';

export var Geometry = {
    Triangle: function(size){
        const halfS = size * 0.5 || 0.5;
        let vertices = [
            //position                      color
            new Vertex([0.0, halfS, 0.0],     [1.0, 0.0, 0.0, 1.0]),
            new Vertex([-halfS, -halfS, 0.0],   [0.0, 1.0, 0.0, 1.0]),
            new Vertex([halfS, -halfS, 0.0],    [0.0, 0.0, 1.0, 1.0])
        ];
        let vertexArray = new VertexArray(vertices, G_VERTEX_LAYOUT);
        return new Mesh(vertexArray);
    },
    Square: function(size){
        const halfS = size * 0.5 || 0.5
        let vertices = [
            //position                       color
            new Vertex([halfS, halfS, 0.0],     [1.0, 0.5, 0.2, 1.0]), // top right
            new Vertex([halfS, -halfS, 0.0],    [1.0, 0.5, 0.2, 1.0]), // bottom right
            new Vertex([-halfS, -halfS, 0.0],   [1.0, 0.5, 0.2, 1.0]), // bottom left
            new Vertex([-halfS, halfS, 0.0],    [1.0, 0.5, 0.2, 1.0]) // top left
        ];
        let indices = [
            0, 3, 1,
            1, 3, 2
        ]
        let vertexArray = new VertexArray(vertices, G_VERTEX_LAYOUT);
        return new Mesh(vertexArray, indices);
    },
    
    Box: function(sizeX, sizeY, sizeZ){
        const halfX = sizeX * 0.5 || 0.5;
        const halfY = sizeY * 0.5 || 0.5;
        const halfZ = sizeZ * 0.5 || 0.5;
        let vertices = [
            new Vertex([-halfX, -halfY, -halfZ]), 
            new Vertex([ halfX, -halfY, -halfZ]),  
            new Vertex([ halfX,  halfY, -halfZ]),
            new Vertex([ halfX,  halfY, -halfZ]),  
            new Vertex([-halfX,  halfY, -halfZ]), 
            new Vertex([-halfX, -halfY, -halfZ]), 

            new Vertex([-halfX, -halfY,  halfZ]),
            new Vertex([ halfX, -halfY,  halfZ]),  
            new Vertex([ halfX,  halfY,  halfZ]),  
            new Vertex([ halfX,  halfY,  halfZ]),  
            new Vertex([-halfX,  halfY,  halfZ]), 
            new Vertex([-halfX, -halfY,  halfZ]),

            new Vertex([-halfX,  halfY,  halfZ]), 
            new Vertex([-halfX,  halfY, -halfZ]), 
            new Vertex([-halfX, -halfY, -halfZ]), 
            new Vertex([-halfX, -halfY, -halfZ]), 
            new Vertex([-halfX, -halfY,  halfZ]), 
            new Vertex([-halfX,  halfY,  halfZ]), 

            new Vertex([ halfX,  halfY,  halfZ]),  
            new Vertex([ halfX,  halfY, -halfZ]),  
            new Vertex([ halfX, -halfY, -halfZ]),  
            new Vertex([ halfX, -halfY, -halfZ]),  
            new Vertex([ halfX, -halfY,  halfZ]),  
            new Vertex([ halfX,  halfY,  halfZ]),  

            new Vertex([-halfX, -halfY, -halfZ]), 
            new Vertex([ halfX, -halfY, -halfZ]),  
            new Vertex([ halfX, -halfY,  halfZ]),  
            new Vertex([ halfX, -halfY,  halfZ]),  
            new Vertex([-halfX, -halfY,  halfZ]), 
            new Vertex([-halfX, -halfY, -halfZ]), 

            new Vertex([-halfX,  halfY, -halfZ]), 
            new Vertex([ halfX,  halfY, -halfZ]),  
            new Vertex([ halfX,  halfY,  halfZ]),  
            new Vertex([ halfX,  halfY,  halfZ]),  
            new Vertex([-halfX,  halfY,  halfZ]), 
            new Vertex([-halfX,  halfY, -halfZ]), 
        ];

        let vertexArray = new VertexArray(vertices, G_VERTEX_LAYOUT);
        return new Mesh(vertexArray);
    }
    
}