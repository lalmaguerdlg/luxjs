import { gl } from "../webgl";

export class RenderBufferFormat{
	internatFormat : number = gl.RGBA8;
	multisample : boolean = false;
	samples : number = 1;
	constructor(internatFormat : number, multisample : boolean, samples : number = 1.0){
		this.internatFormat = internatFormat || this.internatFormat;
		this.multisample = multisample || this.multisample;
		this.samples = samples || this.samples;
	}
}

export class RenderBuffer {
	format: RenderBufferFormat = new RenderBufferFormat(gl.RGBA8, false);
	width: number;
	height: number;
	buffer: WebGLRenderbuffer | null;
	constructor(format : RenderBufferFormat, width : number, height : number) {
		this.format = format || this.format;
		this.width = width;
		this.height = height;
		this.buffer = gl.createRenderbuffer();
		this.bind();
		if(!this.format.multisample){
			gl.renderbufferStorage(gl.RENDERBUFFER, this.format.internatFormat, this.width, this.height);
		}
		else {
			gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.format.samples, this.format.internatFormat, this.width, this.height);
		}
		this.unbind();
	}

	bind() : void { 
		gl.bindRenderbuffer(gl.RENDERBUFFER, this.buffer);
	}

	unbind() : void {
		gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	}

	dispose() : void {
		gl.deleteRenderbuffer(this.buffer);
	}
}