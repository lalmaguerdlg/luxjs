

//TODO: Improve this profiler

class Frame {
	startT : number;
	endT : number;
	total : number;

	start() {
		this.startT = performance.now();
	}

	end() {
		this.endT = performance.now();
		this.total = this.endT - this.startT;
	}
}

class Section {
	name: string;
	frames: Frame[];
	constructor(name) {
		this.name = name;
		this.frames = [];
	}
	start() : void {
		let frame = new Frame();
		frame.start();
		this.frames.push(frame);
	}

	end() : void {
		let currentFrame = this.frames[this.frames.length - 1];
		currentFrame.end();
	}

	average() : number {
		let result : number = 0;
		let total = 0;
		
		for(let frame of this.frames){
			total += frame.total;
		}
		result = total / this.frames.length;
		return result
	}
}

export class Profiler {
	sections : any;
	constructor(){
		this.sections = {};
	}

	start(fnName : string) : void {
		let section = this.sections[fnName];
		if(section) {

		}
		else {
			section = new Section(fnName);
			this.sections[fnName] = section;
		}
		section.start();
	}

	end(fnName : string) : void {
		let section = this.sections[fnName];
		section.end();
	}

	log(){
		for(let elemName in this.sections) {
			let section = <Section>this.sections[elemName];
			let average = section.average();
			console.log(elemName + ': ' + average + 'ms');
		}
	}
}


export const global_profiler = new Profiler();