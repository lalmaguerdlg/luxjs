

//TODO: Improve this profiler

export class Profiler{
	elements : any;
	constructor(){
		this.elements = {};
	}

	start(fnName : string) : void {
		this.elements[fnName] = {};
		this.elements[fnName].startT = performance.now();
	}

	end(fnName : string) : void {
		this.elements[fnName].endT = performance.now();
		this.elements[fnName].total = this.elements[fnName].endT - this.elements[fnName].startT;
	}

	log(){
		for(let elemName in this.elements){
			console.log(elemName + ': ' + this.elements[elemName].total + 'ms');
		}
	}
}


export const global_profiler = new Profiler();