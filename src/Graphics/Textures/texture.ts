import { gl } from '../webgl'

export class TextureFormat {
    level : number = 0;
    internalFormat : number = gl.RGB;
    border : number = 0;
    format : number = gl.RGB;
    type : number = gl.UNSIGNED_BYTE;

    wrap: {S: number , T: number  } = { S: gl.REPEAT, T: gl.REPEAT }

    filtering : { min: number, mag: number } = { min: gl.NEAREST, mag: gl.LINEAR };

    constructor(format ?: any, filtering ?: any, wrap ?: any ){
        this.level = format['level'] || this.level;
        this.internalFormat = format['internalFormat'] || this.internalFormat;
        this.border = format['border'] || this.border;
        this.format = format['format'] || this.format;
        this.type = format['type'] || this.type;

        this.wrap.S = wrap['S'] || this.wrap.S;
        this.wrap.T = wrap['T'] || this.wrap.T;
        this.filtering.min = filtering['min'] || this.filtering.min;
        this.filtering.mag = filtering['mag'] || this.filtering.mag;
    }

}

export let TexturePresets = {
    RGB: () => { 
        return new TextureFormat({
            internalFormat: gl.RGB,
            format: gl.RGB,
            type: gl.UNSIGNED_BYTE,
        }, 
        { min: gl.NEAREST, mag: gl.LINEAR },
        { S: gl.REPEAT, T: gl.REPEAT});
    },
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
    FB_STENCIL: () => { return new TextureFormat(); }, // NOT FINISHED 
    FB_DEPTH_STENCIL: () => { return new TextureFormat(); }, // NOT FINISHED
}

Object.freeze(TexturePresets);

const TEXTUREUNITMAX = 15;

export class Texture {

    width : number = 256;
    height : number = 256;
    data : any 
    textureFormat : TextureFormat = TexturePresets.RGB();
    texture : WebGLTexture | null;

    constructor(width : number, height : number, textureFormat : TextureFormat, data : any){
        this.width = width || this.width;
        this.height = height || this.height;
        
        this.data = data;

        this.textureFormat = textureFormat || this.textureFormat;

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

    use(textureUnit : number) : void {
        let unit = textureUnit || 0;
        if(unit < 0) unit = 0;
        if(unit > TEXTUREUNITMAX) unit = TEXTUREUNITMAX;
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
    }

    dispose() : void {
        gl.deleteTexture(this.texture);
    }
}