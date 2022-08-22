// CREATE OBJECT IN JAVASCRIPT

// 1. Object Literal
// let student1 = {
// 	name: "Sopyan",
// 	energy: 90,
// 	eat: function(portion) {
// 		this.energy = this.energy + portion;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
// 	}
// };

// let student2 = {
// 	name: "Ferry",
// 	energy: 50,
// 	eat: function(portion) {
// 		this.energy = this.energy + portion;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
// 	}
// };

// 2. Function Declaration
// function Student(name, energy) {
// 	let student = {};

// 	student.name 	= name;
// 	student.energy 	= energy;
// 	student.eat = function(portion) {
// 		this.energy += portion;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
// 	}
// 	student.play = function(hours) {
// 		student.energy -= hours;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy play:)`);
// 	}

// 	return student;
// }

// let sopyan 	= Student("Sopyan", 90);
// let ferry	= Student("Ferry", 50);

// 3. Constructor Function
function Student(name, energy) {
	this.name 	= name;
	this.energy = energy;
	this.eat = function(portion) {
		this.energy += portion;
		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
	}
	this.play = function(hours) {
		this.energy -= hours;
		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy play:)`);
	}
}

let sopyan = new Student("Sopyan", 50);