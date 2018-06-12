
class WebGLConfig{
    constructor(canvas){
        let self = this;
        this.domElement = canvas || document.createElement('CANVAS');
        this.context = this.domElement.getContext("webgl2");
        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
            aspect: () => { self.viewport.width / self.viewport.height }
        }

        if(!this.context){
            this.context = this.domElement.getContext("experimental-webgl2");
        }
        
        if(!this.context){
            console.error('Your browser does not support webgl 2.')
        }

        this.isFullscreen = true;

        this.context.viewport(0, 0, this.viewport.width, this.viewport.height);
        this.onResizeCallback = () => {};

        this.onResize = function() {
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
            self.onResizeCallback();
        }

        window.addEventListener("resize", this.onResize);

        this.setup();
    }

    setup(){
        // webgl extensions:
        this.ext = {
            color_buffer_float: this.context.getExtension('EXT_color_buffer_float'),
        }                
    }

    fullscreen(isFullscreen){
        this.isFullscreen = isFullscreen;
        this.onResize();
    }
    
    setClearColor(r, g, b, a){
        this.context.clearColor(r, g, b, a);
    }
}


export let webgl = new WebGLConfig();
export let gl = webgl.context;