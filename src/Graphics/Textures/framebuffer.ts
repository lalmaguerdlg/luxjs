import { gl } from '../webgl'
import { Texture, TexturePresets, TextureFormat } from './texture'
import { RenderBufferFormat, RenderBuffer } from './renderbuffer';

const COLORATTACHMENTMAX = 15;

export enum AttachmentType {
    TEXTURE = 1,
    RENDERBUFFER
}

export class Framebuffer{

    binded : boolean = false;
    aspect : number;
    width : number
    height : number

    attachments : {
        color: any[],
        depth ?: RenderBuffer | Texture,
        stencil ?: RenderBuffer | Texture,
        depthStencil ?: RenderBuffer | Texture
    }

    textureColorFormat : TextureFormat = TexturePresets.FB_COLOR();
    renderBufferColorFormat : RenderBufferFormat = new RenderBufferFormat(gl.RGBA8, false);

    depthFormat : TextureFormat | RenderBufferFormat | null = null;

    fbo : WebGLFramebuffer | null;

    constructor(width, height){
        
        this.width = width;
        this.height = height;
        this.aspect = width / height;

        this.attachments = {
            color: [],
            depth: undefined,
            stencil: undefined,
            depthStencil: undefined,
        };

        this.fbo = gl.createFramebuffer();
    }

    addColor(attachmentType : AttachmentType, colorFormat : TextureFormat | RenderBufferFormat) : void {
        let attachmentOffset = this.attachments.color.length;
        let overflow = false;
        if(attachmentOffset > COLORATTACHMENTMAX) {
            attachmentOffset = COLORATTACHMENTMAX;
            overflow = true;
        }
    
        let attachment : Texture | RenderBuffer | null = null;

        this.bind();
        if(attachmentType == AttachmentType.TEXTURE){
            if (!(colorFormat instanceof TextureFormat)) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            let usedColorFormat = colorFormat || this.textureColorFormat;
            attachment = new Texture(this.width, this.height, usedColorFormat, null);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachmentOffset, gl.TEXTURE_2D, attachment.texture, 0);
        }
        else if(attachmentType == AttachmentType.RENDERBUFFER) {
            if (!(colorFormat instanceof RenderBufferFormat)) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            let format = colorFormat || this.renderBufferColorFormat;
            attachment = new RenderBuffer(format, this.width, this.height);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachmentOffset, gl.RENDERBUFFER, attachment.buffer);
        }

        if (!overflow)
            this.attachments.color.push(attachment);
        else {
            this.attachments.color[attachmentOffset].dispose();
            this.attachments.color[attachmentOffset] = attachment;
        }

        this.unbind();
    }

    addDepth(attachmentType : AttachmentType, format ?: TextureFormat | RenderBufferFormat) : void {
        let attachment : any = null;
        this.bind();
        if(attachmentType == AttachmentType.TEXTURE){
            if(format != undefined && !(format instanceof TextureFormat)) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            this.depthFormat = format || TexturePresets.FB_DEPTH();
            attachment = new Texture(this.width, this.height, this.depthFormat, null);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, attachment.texture, 0);
        }
        else if( attachmentType == AttachmentType.RENDERBUFFER ) { 
            if (!(format instanceof RenderBufferFormat)) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            this.depthFormat = format || new RenderBufferFormat(gl.DEPTH_COMPONENT24, false);
            attachment = new RenderBuffer(this.depthFormat, this.width, this.height);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, attachment.buffer);
        }
        this.attachments.depth = attachment;
        this.unbind();
    }

    addStencil(){
        // TODO: stencil texture
    }

    addDepthStencil() {
        // TODO: Create depth and stencil combined texture
    }

    blit(target, mask, filter){
        // define mask
        let bitMask = mask || gl.COLOR_BUFFER_BIT;
        let filtering = filter || gl.NEAREST;

        // bind buffers
        gl.bindFramebuffer(gl.READ_FRAMEBUFFER, this.fbo);
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, target.fbo);

        if (this.attachments.color.length == 1) {
            
            gl.blitFramebuffer(
                0, 0, this.width, this.height,
                0, 0, target.width, target.height,
                bitMask, filtering);
        }
        else {
            let lastAttachment = 0;
            for(let i = 0; i < this.attachments.color.length; i++) {
                if( i >= target.attachments.color.length) return;
                gl.readBuffer(gl.COLOR_ATTACHMENT0 + i);
                gl.drawBuffers([target.attachments.color[i]]);
                gl.blitFramebuffer(
                    0, 0, this.width, this.height,
                    0, 0, target.width, target.height,
                    bitMask, filtering);
            }
            
            if (this.attachments.color.length < target.attachments.color.length){
                gl.readBuffer(gl.COLOR_ATTACHMENT0 + lastAttachment);
                let buffers : number[] = [];
                for(let i = lastAttachment; i < target.attachments.color.length; i++){
                    buffers.push(target.attachments.color[i]);
                }
                gl.drawBuffers(buffers);
                gl.blitFramebuffer(
                    0, 0, this.width, this.height,
                    0, 0, target.width, target.height,
                    bitMask, filtering);
                
            }
            gl.drawBuffers([gl.BACK]);
        }


        gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
        
    }

    bind(){
        if(!this.binded){
            this.binded = true;
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
            let drawBuffers : number[] = [];
            for(let i = 0; i < this.attachments.color.length; i++){
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

    dispose() {
        for (let attachment in this.attachments) {
            let a = this.attachments[attachment]
            if (a) {
                if (Array.isArray(a)) {
                    for (let att of a) {
                        att.dispose();
                    }
                }
                else {
                    a.dispose();
                }
            }
        }
        gl.deleteFramebuffer(this.fbo);
    }
}