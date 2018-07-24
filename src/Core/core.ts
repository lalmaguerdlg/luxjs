import { ForwardRenderer } from '../Graphics/Renderers/forwardRenderer'
import { Scene } from './scene';
import { BehaviourComponent, PhysicsComponent, RenderComponent } from './component';
import { PhysicsSimulation } from '../Physics/physicsSimulation';
import { ITime } from './time';


export interface LoopCallback {
	(time: ITime): void;
}

class Core {
	simulation: PhysicsSimulation;
	renderer: ForwardRenderer;
	currentScene: Scene;
	time: ITime;
	running: boolean;
	acumulator: number = 0;

	loopCallbacks: LoopCallback[] = [];
	fixedLoopCallbacks: LoopCallback[] = [];

	constructor() {
		this.simulation =  new PhysicsSimulation();
		this.renderer = new ForwardRenderer();
		this.time = {
			deltaTime: 0,
			elapsedTime: 0,
			fixedTime: 1 / 60
		}
		this.running = false;
	}



	useScene(scene: Scene): void {
		this.currentScene = scene;
		this.currentScene.isPlaying = true;
	}

	swapScene(scene: Scene): void {
		this.currentScene.isPlaying = false;
		this.useScene(scene);
		this.coreStart();
	}

	fixedUpdate(behaviours: BehaviourComponent[]): void {
		for(let b of behaviours) {
			b.fixedUpdate(this.time);
		}
	}

	update(behaviours: BehaviourComponent[]): void {
		for(let b of behaviours) {
			b.update(this.time);
		}
	}

	lateUpdate(behaviours: BehaviourComponent[]): void { 
		for (let b of behaviours) {
			b.lateUpdate(this.time);
		}
	}

	coreStart(): void { 
		for (let go of this.currentScene.gameObjects) {
			go.awake();
			go.start();
		}
	}

	coreLoop(dt: number): void {
		this.time.deltaTime = dt;
		
		if(this.currentScene){
			let physicBodies: PhysicsComponent[] = [];
			let behaviours: BehaviourComponent[] = [];

			for (let go of this.currentScene.gameObjects) {
				let components = go.getComponentsList([PhysicsComponent, BehaviourComponent]);
				for(let c of components) {
					if(c.active) {
						if (c instanceof PhysicsComponent) physicBodies.push(c);
						else if (c instanceof BehaviourComponent) behaviours.push(c);
					}
				}
			}
			
			this.acumulator += dt;

			// Physics
			while(this.acumulator >= this.time.fixedTime) {

				for(let cb of this.fixedLoopCallbacks){
					cb(this.time);
				}

				this.fixedUpdate(behaviours);
				this.simulation.simulate(this.time, physicBodies);
				
				this.acumulator -= this.time.fixedTime;
				this.time.elapsedTime += this.time.fixedTime;

			}
			// Behaviours
			this.update(behaviours);
			this.lateUpdate(behaviours);


			for(let cb of this.loopCallbacks){
				cb(this.time);
			}

			// Rendering
			this.renderer.render(this.currentScene);
		}
	}

	run(): void {
		let lastTime = 0;
		let self = this;
		this.coreStart();
		function _loop(nowTime): void {
			nowTime *= 0.001; // Convert time to seconds
			let deltaTime = nowTime - lastTime;
			self.coreLoop(deltaTime);
			lastTime = nowTime;
			requestAnimationFrame(_loop);
		}
		requestAnimationFrame(_loop);
	}

	addLoopCallback(cb : LoopCallback) {
		let index = this.loopCallbacks.indexOf(cb);
		if(index < 0){
			this.loopCallbacks.push(cb);
		}
	}

	addfixedLoopCallback(cb : LoopCallback) {
		let index = this.fixedLoopCallbacks.indexOf(cb);
		if(index < 0){
			this.fixedLoopCallbacks.push(cb);
		}
	}
	
}

export let core = new Core();
export let simulation = core.simulation;
export let renderer = core.renderer;

export function useScene(scene: Scene): void {
	core.useScene(scene);
}

export function swapScene(scene: Scene): void{
	core.swapScene(scene);
}

export function run(): void {
	core.run();
}

export function fixedLoop(callback: LoopCallback) {
	core.addfixedLoopCallback(callback);
}

export function loop(callback: LoopCallback) {
	core.addLoopCallback(callback);
}


/*
export function loop(callback: (dt: number) => void) {
	let lastTime = 0;
	function _loop(nowTime) {
		nowTime *= 0.001; // Convert time to seconds
		let deltaTime = nowTime - lastTime;
		callback(deltaTime);
		lastTime = nowTime;
		requestAnimationFrame(_loop);
	}
	requestAnimationFrame(_loop);
}
*/
