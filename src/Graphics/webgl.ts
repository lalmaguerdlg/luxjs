
export class Viewport {
    width: number;
    height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    aspect() : number {
        return this.width / this.height;
    }
}

class WebGLConfig{

    domElement: HTMLCanvasElement;
    context: WebGL2RenderingContext;
    ext: any;
    viewport: Viewport;
    isFullscreen: boolean;

    onResizeCallback: (viewport: Viewport) => void;

    private _onResize: () => void;

    constructor(canvas ?: HTMLCanvasElement) {
        let self = this;
        this.domElement = canvas || (<HTMLCanvasElement>document.createElement('CANVAS'));
        this.context = (<WebGL2RenderingContext>this.domElement.getContext("webgl2"));
        this.viewport =  new Viewport(window.innerWidth, window.innerHeight);

        if(!this.context){
            this.context = (<WebGL2RenderingContext>this.domElement.getContext("experimental-webgl2"));
        }
        
        if(!this.context){
            console.error('Your browser does not support webgl 2.')
        }

        this.isFullscreen = true;

        this.context.viewport(0, 0, this.viewport.width, this.viewport.height);
        this.onResizeCallback = (viewport: Viewport) => {};

        this._onResize = () => {
            let displayWidth = 0;
            let displayHeight = 0;

            if(self.isFullscreen) {
                displayWidth = window.innerWidth;
                displayHeight = window.innerHeight;
            }
            else {
                displayWidth = self.domElement.clientWidth;
                displayHeight = self.domElement.clientHeight;
            }
            
            if (self.domElement.width != displayWidth || self.domElement.height != displayHeight){
                self.domElement.width = displayWidth;
                self.domElement.height = displayHeight;
                self.viewport.width = displayWidth;
                self.viewport.height = displayHeight;
                self.context.viewport(0, 0, self.viewport.width, self.viewport.height);
            }
            self.onResizeCallback(self.viewport);
        }

        window.addEventListener("resize", this._onResize);

        this.setup();
    }

    setup() : void {
        // webgl extensions:
        this.ext = {
            color_buffer_float: this.context.getExtension('EXT_color_buffer_float'),
        }                
    }

    fullscreen(isFullscreen){
        this.isFullscreen = isFullscreen;
        this._onResize();
    }
    
    setClearColor(r, g, b, a){
        this.context.clearColor(r, g, b, a);
    }
}

export let webgl = new WebGLConfig();
export let gl = webgl.context;