import { gl } from '../webgl'
import { Texture, TexturePresets } from './texture'

const COLORATTACHMENTMAX = 15;

export class Framebuffer{
    constructor(width, height){
        this.binded = false;
        this.aspect = width / height;
        this.width = width;
        this.height = height;

        this.textures = {
            color: [],
            depth: undefined,
            stencil: undefined,
            depthStencil: undefined,
        };

        this.colorFormat = TexturePresets.FB_COLOR();

        this.fbo = gl.createFramebuffer();
    }

    addColor(colorFormat){
        let attachmentOffset = this.textures.color.length;
        let overflow = false;
        if(attachmentOffset > COLORATTACHMENTMAX) {
            attachmentOffset = COLORATTACHMENTMAX;
            overflow = true;
        }
        
        let usedColorFormat = colorFormat || this.colorFormat;

        this.bind();
        let colorTexture = new Texture(this.width, this.height, usedColorFormat, null);
        if(!overflow)
            this.textures.color.push(colorTexture);
        else {
            this.textures.color[attachmentOffset].dispose();
            this.textures.color[attachmentOffset] = colorTexture;
        }
            
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachmentOffset, gl.TEXTURE_2D, colorTexture.texture, 0);
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
        for(let textureT in this.textures){
            let t = this.textures[this.textureT]
            if(t){
                if(Array.isArray(t)){
                    for(let tex of t){
                        tex.dispose();
                    }
                }
                else {
                    t.dispose();
                }
            }
        }
        gl.deleteFramebuffer(this.fbo);
    }

    bind(){
        if(!this.binded){
            this.binded = true;
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
            let drawBuffers = [];
            for(let i = 0; i < this.textures.color.length; i++){
                drawBuffers.push(gl.COLOR_ATTACHMENT0 + i);
            }
            gl.drawBuffers(drawBuffers);
        }
    }

    unbind(){
        if(this.binded){
            this.binded = false;
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.drawBuffers([gl.BACK]);
        }
    }
}