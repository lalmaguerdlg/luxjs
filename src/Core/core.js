import { ForwardRenderer } from '../Render/Renderers/forwardRenderer'
import { Scene } from './scene';
import { BehaviourComponent, PhysicsComponent, RenderComponent } from './component';
import { PhysicsSimulation } from '../Physics/physicsSimulation';

class Core {
	constructor() {
		this.physicsSimulation =  new PhysicsSimulation();
		this.forwardRenderer = new ForwardRenderer();
		this.currentScene = undefined;
		this.time = {
			deltaTime: 0,
			elapsedTime: 0,
		}
	}

	useScene(scene) {
		if(!scene instanceof Scene) return;
		this.currentScene = scene;
		this.currentScene.isPlaying = true;
	}

	swapScene(scene) {
		if (!scene instanceof Scene) return;
		this.currentScene.isPlaying = false;
		this.useScene(scene);
		this.start();
	}

	update(behaviours){
		for(let b of behaviours) {
			b.update(this.time);
		}
	}

	lateUpdate(behaviours) { 
		for (let b of behaviours) {
			b.lateUpdate(this.time);
		}
	}

	coreStart() { 
		for (let go of this.currentScene.gameObjects) {
			go.awake();
			go.start();
		}
	}

	coreLoop(dt) {
		this.time.deltaTime = dt;
		this.time.elapsedTime += dt;
		if(this.currentScene){
			let physics = [];
			let behaviours = [];

			for (let go of this.currentScene.gameObjects) {
				let components = go.getComponentsList([PhysicsComponent, BehaviourComponent]);
				for(let c of components) {
					if(c.active) {
						if (c instanceof PhysicsComponent) physics.push(c);
						else if (c instanceof BehaviourComponent) behaviours.push(c);
					}
				}
			}

			// Physics
			this.physicsSimulation.simulate(this.time, physics);

			// Behaviours
			this.update(behaviours);
			this.lateUpdate(behaviours);

			// Rendering
			this.forwardRenderer.render(this.currentScene);
		}
	}

	run() {
		let lastTime = 0;
		let self = this;
		this.coreStart();
		function _loop(nowTime) {
			nowTime *= 0.001; // Convert time to seconds
			let deltaTime = nowTime - lastTime;
			self.coreLoop(deltaTime);
			lastTime = nowTime;
			requestAnimationFrame(_loop);
		}
		requestAnimationFrame(_loop);
	}
}

export let luxCore = new Core();
export let physicsSimulation = luxCore.physicsSimulation;