import { Vertex, VERTEX_LAYOUT } from './vertex';
import { VertexArray } from './vertexArray';
import { Mesh }  from './mesh';
import { vec3 } from 'gl-matrix';

export let Geometry = {
    Triangle: function(size : number) : Mesh {
        const halfS = size * 0.5 || 0.5;
        let vertices = [
            //position                          normal              color
            new Vertex([0.0, halfS, 0.0],       [0.0, 0.0, 1.0]),
            new Vertex([-halfS, -halfS, 0.0],   [0.0, 0.0, 1.0]),
            new Vertex([halfS, -halfS, 0.0],    [0.0, 0.0, 1.0]),
        ];
        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray);
    },
    Quad: function(size : number ) : Mesh {
        const halfS = size * 0.5 || 0.5
        let vertices = [
            //position                           normal             uv
            new Vertex([halfS, halfS, 0.0],     [0.0, 0.0, 1.0], [1.0, 1.0]), // top right
            new Vertex([halfS, -halfS, 0.0],    [0.0, 0.0, 1.0], [1.0, 0.0]), // bottom right
            new Vertex([-halfS, -halfS, 0.0],   [0.0, 0.0, 1.0], [0.0, 0.0]), // bottom left
            new Vertex([-halfS, halfS, 0.0],    [0.0, 0.0, 1.0], [0.0, 1.0]) // top left
        ];
        let indices = [
            0, 3, 1,
            1, 3, 2
        ]
        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray, indices);
    },
    Box: function(sizeX : number, sizeY : number, sizeZ : number) : Mesh {
        const halfX = sizeX * 0.5 || 0.5;
        const halfY = sizeY * 0.5 || 0.5;
        const halfZ = sizeZ * 0.5 || 0.5;

        let vertices = [
           new Vertex([-halfX, -halfY, -halfZ], [0.0,  0.0, -1.0], [0.0,  0.0]),
           new Vertex([ halfX, -halfY, -halfZ], [0.0,  0.0, -1.0], [1.0,  0.0]), 
           new Vertex([ halfX,  halfY, -halfZ], [0.0,  0.0, -1.0], [1.0,  1.0]),
           new Vertex([ halfX,  halfY, -halfZ], [0.0,  0.0, -1.0], [1.0,  1.0]), 
           new Vertex([-halfX,  halfY, -halfZ], [0.0,  0.0, -1.0], [0.0,  1.0]), 
           new Vertex([-halfX, -halfY, -halfZ], [0.0,  0.0, -1.0], [0.0,  0.0]), 
       
           new Vertex([-halfX, -halfY,  halfZ], [0.0,  0.0, 1.0], [0.0,  0.0]),
           new Vertex([ halfX, -halfY,  halfZ], [0.0,  0.0, 1.0], [1.0,  0.0]),
           new Vertex([ halfX,  halfY,  halfZ], [0.0,  0.0, 1.0], [1.0,  1.0]),
           new Vertex([ halfX,  halfY,  halfZ], [0.0,  0.0, 1.0], [1.0,  1.0]),
           new Vertex([-halfX,  halfY,  halfZ], [0.0,  0.0, 1.0], [0.0,  1.0]),
           new Vertex([-halfX, -halfY,  halfZ], [0.0,  0.0, 1.0], [0.0,  0.0]),
       
           new Vertex([-halfX,  halfY,  halfZ], [-1.0,  0.0,  0.0], [1.0,  0.0]),
           new Vertex([-halfX,  halfY, -halfZ], [-1.0,  0.0,  0.0], [1.0,  1.0]),
           new Vertex([-halfX, -halfY, -halfZ], [-1.0,  0.0,  0.0], [0.0,  1.0]),
           new Vertex([-halfX, -halfY, -halfZ], [-1.0,  0.0,  0.0], [0.0,  1.0]),
           new Vertex([-halfX, -halfY,  halfZ], [-1.0,  0.0,  0.0], [0.0,  0.0]),
           new Vertex([-halfX,  halfY,  halfZ], [-1.0,  0.0,  0.0], [1.0,  0.0]),
       
           new Vertex([ halfX,  halfY,  halfZ], [ 1.0,  0.0,  0.0], [1.0,  0.0]),
           new Vertex([ halfX,  halfY, -halfZ], [ 1.0,  0.0,  0.0], [1.0,  1.0]),
           new Vertex([ halfX, -halfY, -halfZ], [ 1.0,  0.0,  0.0], [0.0,  1.0]),
           new Vertex([ halfX, -halfY, -halfZ], [ 1.0,  0.0,  0.0], [0.0,  1.0]),
           new Vertex([ halfX, -halfY,  halfZ], [ 1.0,  0.0,  0.0], [0.0,  0.0]),
           new Vertex([ halfX,  halfY,  halfZ], [ 1.0,  0.0,  0.0], [1.0,  0.0]),
       
           new Vertex([-halfX, -halfY, -halfZ], [ 0.0, -1.0,  0.0], [0.0,  1.0]),
           new Vertex([ halfX, -halfY, -halfZ], [ 0.0, -1.0,  0.0], [1.0,  1.0]),
           new Vertex([ halfX, -halfY,  halfZ], [ 0.0, -1.0,  0.0], [1.0,  0.0]),
           new Vertex([ halfX, -halfY,  halfZ], [ 0.0, -1.0,  0.0], [1.0,  0.0]),
           new Vertex([-halfX, -halfY,  halfZ], [ 0.0, -1.0,  0.0], [0.0,  0.0]),
           new Vertex([-halfX, -halfY, -halfZ], [ 0.0, -1.0,  0.0], [0.0,  1.0]),
       
           new Vertex([-halfX,  halfY, -halfZ], [ 0.0,  1.0,  0.0], [0.0,  1.0]),
           new Vertex([ halfX,  halfY, -halfZ], [ 0.0,  1.0,  0.0], [1.0,  1.0]),
           new Vertex([ halfX,  halfY,  halfZ], [ 0.0,  1.0,  0.0], [1.0,  0.0]),
           new Vertex([ halfX,  halfY,  halfZ], [ 0.0,  1.0,  0.0], [1.0,  0.0]),
           new Vertex([-halfX,  halfY,  halfZ], [ 0.0,  1.0,  0.0], [0.0,  0.0]),
           new Vertex([-halfX,  halfY, -halfZ], [ 0.0,  1.0,  0.0], [0.0,  1.0])
        ];

        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray);
    },
    Plane: function(size : number, cells : number) : Mesh {
        let vertices:Vertex[] = [];
        
        let cols = cells + 1;
        let rows = cells + 1;

        let cellSize = size / cells;

        let halfSize = size * 0.5;

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++) {
                let vertex = new Vertex();
                vertex.position[0] = -halfSize + (i * cellSize);
                vertex.position[1] = 0;
                vertex.position[2] = -halfSize + (j * cellSize);
                
                vertex.uv[0] = i / rows;
                vertex.uv[1] = j / cols;
                
                vertex.normal[0] = 0.0;
                vertex.normal[1] = 1.0;
                vertex.normal[2] = 0.0;
                vertices.push(vertex);
            }
        }

        let indices:number[] = [];

        for(let i = 0; i < cells; i++) {
            for(let j = 0; j < cells; j++) {
                let index = (i * cols) + j;

                indices.push(index);
                indices.push(index + cols);
                indices.push(index + 1);

                indices.push(index + 1);
                indices.push(index + cols);
                indices.push(index + cols + 1);
            }
        }

        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray, indices);
    },
    Sphere: function(rad : number, slices : number, stacks : number) : Mesh {
        let vertices:Vertex[] = [];
        
        let cols = slices + 1;
        let rows = stacks + 1;

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++) {
                let vertex = new Vertex();
                let rho = i * (Math.PI / (rows - 1));
                let theta = j * (2 * Math.PI / (cols - 1));
                vertex.position[0] = rad * Math.sin(rho) * Math.sin(theta);
                vertex.position[1] = rad * Math.cos(rho);
                vertex.position[2] = rad * Math.sin(rho) * Math.cos(theta);
                
                vertex.uv[0] = i / rows;
                vertex.uv[1] = j / cols;
                
                vertex.normal[0] = vertex.position[0];
                vertex.normal[1] = vertex.position[1];
                vertex.normal[2] = vertex.position[2];
                vertices.push(vertex);
            }
        }

        let sortedFaces:Vertex[] = [];

        for(let i = 0; i < stacks; i++) {
            for(let j = 0; j < slices; j++) {
                let index = (i * cols) + j;

                let normal = vec3.create();
                let v1 = vec3.create();
                vec3.sub(v1, vertices[index + cols].position, vertices[index].position);
                let v2 = vec3.create();
                vec3.sub(v2, vertices[index + 1].position, vertices[index].position);

                vec3.cross(normal, v1, v2);

                sortedFaces.push(vertices[index].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];

                sortedFaces.push(vertices[index + cols].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];

                sortedFaces.push(vertices[index + 1].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];

                
                vec3.sub(v1, vertices[index + 1].position, vertices[index + cols + 1].position);
                vec3.sub(v2, vertices[index + cols].position, vertices[index + cols + 1].position);
                vec3.cross(normal, v1, v2);

                sortedFaces.push(vertices[index + 1].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];

                sortedFaces.push(vertices[index + cols].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];

                sortedFaces.push(vertices[index + cols + 1].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];
            }
        }

        let vertexArray = new VertexArray(sortedFaces, VERTEX_LAYOUT);
        return new Mesh(vertexArray);
    },
    SphereSmooth: function(rad : number, slices : number, stacks : number) : Mesh {
        let vertices:Vertex[] = [];
        
        let cols = slices + 1;
        let rows = stacks + 1;

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++) {
                let vertex = new Vertex();
                let rho = i * (Math.PI / (rows - 1));
                let theta = j * (2 * Math.PI / (cols - 1));
                vertex.position[0] = rad * Math.sin(rho) * Math.sin(theta);
                vertex.position[1] = rad * Math.cos(rho);
                vertex.position[2] = rad * Math.sin(rho) * Math.cos(theta);
                
                vertex.uv[0] = i / rows;
                vertex.uv[1] = j / cols;
                
                vertex.normal[0] = vertex.position[0];
                vertex.normal[1] = vertex.position[1];
                vertex.normal[2] = vertex.position[2];
                vertices.push(vertex);
            }
        }

        let indices:number[] = [];

        for(let i = 0; i < stacks; i++) {
            for(let j = 0; j < slices; j++) {
                let index = (i * cols) + j;

                indices.push(index);
                indices.push(index + cols);
                indices.push(index + 1);

                indices.push(index + 1);
                indices.push(index + cols);
                indices.push(index + cols + 1);
            }
        }

        let vertexArray = new VertexArray(vertices, VERTEX_LAYOUT);
        return new Mesh(vertexArray, indices);
    },
}