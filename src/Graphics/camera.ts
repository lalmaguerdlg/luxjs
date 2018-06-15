import { mat4 } from 'gl-matrix'
import { Transform } from '../Core/transform'

export class Camera {
	transform : Transform = new Transform();
	mPerspective: mat4 =  mat4.create();
	mView:mat4 = mat4.create();
	exposure:number = 1.0;
}