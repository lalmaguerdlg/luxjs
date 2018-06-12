import { gl } from "../webgl";

export class RenderBufferFormat{
	constructor(internatFormat, multisample, samples){
		this.internatFormat = internatFormat || gl.RGBA8;
		this.multisample = multisample || false;
		this.samples = samples || 1;
	}
}

export class RenderBuffer {
	constructor(format, width, height) {
		this.format = format || new RenderBufferFormat(gl.RGBA8, false);
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

	bind() { 
		gl.bindRenderbuffer(gl.RENDERBUFFER, this.buffer);
	}

	unbind() {
		gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	}

	dispose() {
		gl.deleteRenderbuffer(this.buffer);
	}
}