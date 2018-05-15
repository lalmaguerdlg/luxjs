import { gl } from '../webgl'
import { Texture, TexturePresets } from './texture'

export class Framebuffer{
    constructor(width, height){
        this.binded = false;
        this.aspect = width / height;
        this.width = width;
        this.height = height;

        this.textures = {
            color: undefined,
            depth: undefined,
            stencil: undefined,
            depthStencil: undefined,
        };

        this.colorFormat = TexturePresets.FB_COLOR();

        this.fbo = gl.createFramebuffer();
    }

    addColor(colorFormat){
        this.bind();
        this.colorFormat = colorFormat || this.colorFormat;
        this.textures.color = new Texture(this.width, this.height, this.colorFormat, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.textures.color.texture, 0);
        this.unbind();
    }

    addDepth(){
        this.bind();
        this.depthFormat = TexturePresets.FB_DEPTH();
        this.textures.depth = new Texture(this.width, this.height, this.depthFormat, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.textures.depth.texture, 0);
        this.bind();
    }

    addStencil(){
        // TODO: stencil texture
    }

    addDepthStencil() {
        // TODO: Create depth and stencil combined texture
    }

    dispose(){
        for(let texture of this.textures){
            if(texture)
                texture.dispose();
        }
        gl.deleteFramebuffer(framebuffer);
    }

    bind(){
        if(!this.binded){
            this.binded = true;
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
        }
    }

    unbind(){
        if(this.binded){
            this.binded = false;
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
    }
}