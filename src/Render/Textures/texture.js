import { gl } from '../webgl'

export class TextureFormat {
    constructor(format, filtering, wrap){
        this.level = format['level'] || 0;
        this.internalFormat = format['internalFormat'] || gl.RGB;
        this.border = format['border'] || 0;
        this.format = format['format'] || gl.RGB;
        this.type = format['type'] || gl.UNSIGNED_BYTE;

        this.wrap = {S: gl.REPEAT, T: gl.REPEAT };
        this.filtering = { min: gl.NEAREST, mag: gl.LINEAR };

        this.wrap.S = wrap['S'] || this.wrap.S;
        this.wrap.T = wrap['T'] || this.wrap.T;
        this.filtering.min = filtering['min'] || this.filtering.min;
        this.filtering.mag = filtering['mag'] || this.filtering.mag;
    }

}

export let TexturePresets = {
    RGB: () => { return new TextureFormat() },
    sRGB: () => { return new TextureFormat() }, // TODO: Make sRGB texture preset
    FB_COLOR: () => { 
        return new TextureFormat({
            internalFormat: gl.RGBA,
            format: gl.RGBA,
            type: gl.UNSIGNED_BYTE,
        }, 
        { min: gl.LINEAR, mag: gl.LINEAR },
        { S: gl.CLAMP_TO_EDGE, T: gl.CLAMP_TO_EDGE}); 
    },
    FB_HDR_COLOR: () => {
        return new TextureFormat({
            internalFormat: gl.RGBA16F,
            format: gl.RGBA,
            type: gl.FLOAT,
        },
        { min: gl.NEAREST, mag: gl.NEAREST},
        { S: gl.CLAMP_TO_EDGE, T: gl.CLAMP_TO_EDGE});
    },
    
    FB_DEPTH: () => { 
        
        return new TextureFormat({
            internalFormat: gl.DEPTH_COMPONENT24,
            format: gl.DEPTH_COMPONENT,
            type: gl.UNSIGNED_INT,
        }, 
        { min: gl.NEAREST, mag: gl.NEAREST },
        { S: gl.CLAMP_TO_EDGE, T: gl.CLAMP_TO_EDGE});
    },
    FB_STENCIL: () => { 
        return new TextureFormat({
            internalFormat: gl.RGBA,
            format: gl.RGBA,
            type: gl.UNSIGNED_BYTE,
        }, 
        { min: gl.LINEAR, mag: gl.LINEAR },
        { S: gl.CLAMP_TO_EDGE, T: gl.CLAMP_TO_EDGE});
    },
    FB_DEPTH_STENCIL: () => { 
        return new TextureFormat({
            internalFormat: gl.RGBA,
            format: gl.RGBA,
            type: gl.UNSIGNED_BYTE,
        }, 
        { min: gl.LINEAR, mag: gl.LINEAR },
        { S: gl.CLAMP_TO_EDGE, T: gl.CLAMP_TO_EDGE});
    },
}

Object.freeze(TexturePresets);

const TEXTUREUNITMAX = 15;

export class Texture {
    constructor(width, height, textureFormat, data){
        this.width = width || 256;
        this.height = height || 256;
        
        this.data = data;

        this.textureFormat = textureFormat || TexturePresets.RGB();

        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, this.textureFormat.level, this.textureFormat.internalFormat, 
                        this.width, this.height, this.textureFormat.border, 
                        this.textureFormat.format, this.textureFormat.type, this.data);
        
        //TODO: MIPMAPing 
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.textureFormat.filtering.min);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.textureFormat.filtering.mag);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.textureFormat.wrap.S);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.textureFormat.wrap.T);

    }

    bind(textureUnit) {
        if(textureUnit < 0) textureUnit = 0;
        if(textureUnit > TEXTUREUNITMAX) textureUnit = TEXTUREUNITMAX;
        gl.activeTexture(gl.TEXTURE0 + textureUnit);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
    }

    dispose(){
        gl.deleteTexture(this.texture);
    }
}