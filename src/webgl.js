
function glInit(canvas){
    context = canvas.getContext("webgl2");
    if(!context){
        context = canvas.getContext("experimental-webgl2");
    }

    if(!context){
        console.error('Your browser does not support webgl 2.')
    }
    context.resize = function(){
        var displayWidth = this.canvas.clientWidth;
        var displayHeight = this.canvas.clientHeight;
    
        if (this.canvas.width != displayWidth || this.canvas.height != displayHeight){
            this.canvas.width = displayWidth;
            this.canvas.height = displayHeight;
            this.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    context.viewport(0, 0, context.canvas.width, context.canvas.height);
    return context;
}

function glLoop(callback){
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

