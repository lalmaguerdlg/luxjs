import { RenderSystem } from '../Render/rendererSystem'
import { glLoop } from '../Render/webgl'


class Core {
	constructor(){
		this.renderSystem = new RenderSystem();
		this.currentScene = undefined;
		this.elapsedTime = 0;
	}

	swapScene(scene) {
		this.currentScene = scene;
	}

	loop(dt) {
		if(this.currentScene){
			this.renderSystem.render(this.currentScene);
		}
	}
}

export let luxCore = new Core();
glLoop(luxCore.loop);

