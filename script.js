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
// function Student(name, energy) {
// 	this.name 	= name;
// 	this.energy = energy;
// 	this.eat = function(portion) {
// 		this.energy += portion;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
// 	}
// 	this.play = function(hours) {
// 		this.energy -= hours;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy play:)`);
// 	}
// }

// let sopyan = new Student("Sopyan", 50);

// 4. Object.create
// Create Object Literal
// let methodStudent = {
// 	eat: function(portion) {
// 		this.energy += portion;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy eat:)`);
// 	},
// 	play: function(hours) {
// 		this.energy -= hours;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy play:)`);
// 	},
// 	sleep: function(hours) {
// 		this.energy += hours * 2;
// 		console.log(`Hello ${this.name}, your energy is ${this.energy}. Happy sleep:)`);
// 	}
// }

// Create Declaration Function
// function Student(name, energy) {
// 	let student = Object.create(methodStudent);

// 	student.name 	= name;
// 	student.energy 	= energy;

// 	return student;
// }

// let sopyan = Student("Sopyan", 10);

// 5. Prototype
// Main Object(Created with constructor function)
// function Student(name, energy) {
// 	this.name = name;
// 	this.energy = energy;
// }

// Create Method with Prototype
// // Method eat()
// Student.prototype.eat = function(portion) {
// 	this.energy += portion;
// 	return `Hello ${this.name}, now your energy is ${this.energy}`;
// }
// // Method sleep()
// Student.prototype.sleep = function(hours) {
// 	this.energy += hours;
// 	return `Hello ${this.name}, now your energy is ${this.energy}`;
// }
// // Method play()
// Student.prototype.play = function(hours) {
// 	this.energy -= hours;
// 	return `Hello ${this.name}, now your energy is ${this.energy}`;
// }

// Instantiation Object
// let sopyan = new Student("Sopyan", 15);
// let ferry = new Student("Ferry", 20);

// 6. Class
// Parent Class
class Student {
	constructor(name, energy) {
		this.name = name;
		this.energy = energy;
	}
	// Method eat()
	eat(portion) {
		this.energy += portion;
		return `Hello ${this.name}, now your energy is ${this.energy}`;
	}
	// Method sleep()
	sleep(hours) {
		this.energy += hours;
		return `Hello ${this.name}, now your energy is ${this.energy}`;
	}
	// Method play()
	play(hours) {
		this.energy -= hours;
		return `Hello ${this.name}, now your energy is ${this.energy}`;
	}
}

// Instantiation Class Object
let sopyan = new Student("Sopyan", 15);
let ferry = new Student("Ferry", 20);