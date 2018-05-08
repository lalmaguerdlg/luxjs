import { Vertex, VERTEX_LAYOUT } from './vertex';
import { VertexArray } from './vertexArray';
import { Mesh }  from './mesh';
import { gl } from '../webgl'

export let Geometry = {
    Triangle: function(size){
        const halfS = size * 0.5 || 0.5;
        let vertices = [
            //position                          normal              color
            new Vertex([0.0, halfS, 0.0],       [0.0, 0.0, 1.0],    [1.0, 0.0, 0.0, 1.0]),
            new Vertex([-halfS, -halfS, 0.0],   [0.0, 0.0, 1.0],    [0.0, 1.0, 0.0, 1.0]),
            new Vertex([halfS, -halfS, 0.0],    [0.0, 0.0, 1.0],    [0.0, 0.0, 1.0, 1.0])
        ];
        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray);
    },
    Square: function(size){
        const halfS = size * 0.5 || 0.5
        let vertices = [
            //position                           normal             color
            new Vertex([halfS, halfS, 0.0],     [0.0, 0.0, 1.0],    [1.0, 0.5, 0.2, 1.0]), // top right
            new Vertex([halfS, -halfS, 0.0],    [0.0, 0.0, 1.0],    [1.0, 0.5, 0.2, 1.0]), // bottom right
            new Vertex([-halfS, -halfS, 0.0],   [0.0, 0.0, 1.0],    [1.0, 0.5, 0.2, 1.0]), // bottom left
            new Vertex([-halfS, halfS, 0.0],    [0.0, 0.0, 1.0],    [1.0, 0.5, 0.2, 1.0]) // top left
        ];
        let indices = [
            0, 3, 1,
            1, 3, 2
        ]
        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray, indices);
    },
    
    Box: function(sizeX, sizeY, sizeZ){
        const halfX = sizeX * 0.5 || 0.5;
        const halfY = sizeY * 0.5 || 0.5;
        const halfZ = sizeZ * 0.5 || 0.5;

        let vertices = [
           new Vertex([-halfX, -halfY, -halfZ], [0.0,  0.0, -1.0]),
           new Vertex([ halfX, -halfY, -halfZ], [0.0,  0.0, -1.0]), 
           new Vertex([ halfX,  halfY, -halfZ], [0.0,  0.0, -1.0]), 
           new Vertex([ halfX,  halfY, -halfZ], [0.0,  0.0, -1.0]), 
           new Vertex([-halfX,  halfY, -halfZ], [0.0,  0.0, -1.0]), 
           new Vertex([-halfX, -halfY, -halfZ], [0.0,  0.0, -1.0]), 
       
           new Vertex([-halfX, -halfY,  halfZ], [0.0,  0.0, 1.0]),
           new Vertex([ halfX, -halfY,  halfZ], [0.0,  0.0, 1.0]),
           new Vertex([ halfX,  halfY,  halfZ], [0.0,  0.0, 1.0]),
           new Vertex([ halfX,  halfY,  halfZ], [0.0,  0.0, 1.0]),
           new Vertex([-halfX,  halfY,  halfZ], [0.0,  0.0, 1.0]),
           new Vertex([-halfX, -halfY,  halfZ], [0.0,  0.0, 1.0]),
       
           new Vertex([-halfX,  halfY,  halfZ], [-1.0,  0.0,  0.0]),
           new Vertex([-halfX,  halfY, -halfZ], [-1.0,  0.0,  0.0]),
           new Vertex([-halfX, -halfY, -halfZ], [-1.0,  0.0,  0.0]),
           new Vertex([-halfX, -halfY, -halfZ], [-1.0,  0.0,  0.0]),
           new Vertex([-halfX, -halfY,  halfZ], [-1.0,  0.0,  0.0]),
           new Vertex([-halfX,  halfY,  halfZ], [-1.0,  0.0,  0.0]),
       
           new Vertex([ halfX,  halfY,  halfZ], [ 1.0,  0.0,  0.0]),
           new Vertex([ halfX,  halfY, -halfZ], [ 1.0,  0.0,  0.0]),
           new Vertex([ halfX, -halfY, -halfZ], [ 1.0,  0.0,  0.0]),
           new Vertex([ halfX, -halfY, -halfZ], [ 1.0,  0.0,  0.0]),
           new Vertex([ halfX, -halfY,  halfZ], [ 1.0,  0.0,  0.0]),
           new Vertex([ halfX,  halfY,  halfZ], [ 1.0,  0.0,  0.0]),
       
           new Vertex([-halfX, -halfY, -halfZ], [ 0.0, -1.0,  0.0]),
           new Vertex([ halfX, -halfY, -halfZ], [ 0.0, -1.0,  0.0]),
           new Vertex([ halfX, -halfY,  halfZ], [ 0.0, -1.0,  0.0]),
           new Vertex([ halfX, -halfY,  halfZ], [ 0.0, -1.0,  0.0]),
           new Vertex([-halfX, -halfY,  halfZ], [ 0.0, -1.0,  0.0]),
           new Vertex([-halfX, -halfY, -halfZ], [ 0.0, -1.0,  0.0]),
       
           new Vertex([-halfX,  halfY, -halfZ], [ 0.0,  1.0,  0.0]),
           new Vertex([ halfX,  halfY, -halfZ], [ 0.0,  1.0,  0.0]),
           new Vertex([ halfX,  halfY,  halfZ], [ 0.0,  1.0,  0.0]),
           new Vertex([ halfX,  halfY,  halfZ], [ 0.0,  1.0,  0.0]),
           new Vertex([-halfX,  halfY,  halfZ], [ 0.0,  1.0,  0.0]),
           new Vertex([-halfX,  halfY, -halfZ], [ 0.0,  1.0,  0.0])
        ];

        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray);
    }
    
}