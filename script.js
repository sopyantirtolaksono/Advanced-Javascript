// CREATE OBJECT IN JAVASCRIPT

// 1. Object Literal
let student1 = {
	name: "Sopyan",
	energy: 90,
	eat: function(portion) {
		this.energy = this.energy + portion;
		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
	}
};

let student2 = {
	name: "Ferry",
	energy: 50,
	eat: function(portion) {
		this.energy = this.energy + portion;
		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
	}
};