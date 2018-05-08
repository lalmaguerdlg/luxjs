
class WebGLRenderer{
    constructor(canvas){
        this.domElement = canvas || document.createElement('CANVAS');
        this.context = this.domElement.getContext("webgl2");
        if(!this.context){
            this.context = this.domElement.getContext("experimental-webgl2");
        }
        
        if(!this.context){
            console.error('Your browser does not support webgl 2.')
        }

        this.isFullscreen = false;

        this.context.viewport(0, 0, this.context.canvas.width, this.context.canvas.height);

        let self = this;
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
                self.context.viewport(0, 0, self.domElement.width, self.domElement.height);
            }
        }

        window.addEventListener("resize", this.onResize);
    }

    fullscreen(isFullscreen){
        this.isFullscreen = isFullscreen;
        this.onResize();
    }
}

export let renderer = new WebGLRenderer();
export let gl = renderer.context;

export function glLoop(callback){
    let lastTime = 0;
    function _glLoop(nowTime){
        nowTime *= 0.001; // Convert time to seconds
        let deltaTime = nowTime - lastTime;
        callback(deltaTime);
        lastTime = nowTime;
        requestAnimationFrame(_glLoop);
    }
    requestAnimationFrame(_glLoop);
}

