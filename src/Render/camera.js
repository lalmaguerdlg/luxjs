import { mat4 } from 'gl-matrix'
import { Transform } from '../Core/transform'

export class Camera {
	constructor(){
		this.transform = new Transform();
		this.mPerspective = mat4.create();
		this.mView = mat4.create();
	}
}