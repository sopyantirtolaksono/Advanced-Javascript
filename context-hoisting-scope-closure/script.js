// CONTEXT-HOISTING-SCOPE-CLOSURE

// 1. Execution Context(Creation phase - Execution phase), Hoisting & Scope
// // Creation phase & Hoisting
// function one() {
// 	var nama = "Sopyan";
// 	console.log(nama);
// }

// // Creation phase & Hoisting
// function two() {
// 	// Scope(Access to global scope/window)
// 	console.log(nama);
// }

// // Execution phase
// console.log(nama);

// // Creation phase & Hoisting
// var nama = "Ferry";

// // Execution phase
// one();

// // Execution phase
// two("Indah");

// // Execution phase
// console.log(nama);


// 2. Closure
// Closure with Function Factories
// Outer Function
// let add = function() {
// 	// Variabel counter to be private
// 	let counter = 0;

// 	// Inner Function
// 	return function() {
// 		return ++counter;
// 	}
// }

// // Function Factories
// let a = add();

// // Reasign variabel counter in function add(), it's not working because counter is private
// // counter = 100;

// console.log(a());
// console.log(a());
// console.log(a());

// Closure with Immidietly Invoke Function
// Outer Function
let add = (function() {
	// Variabel counter to be private
	let counter = 0;

	// Inner Function
	return function() {
		return ++counter;
	}
})();

// Reasign variabel counter in function add(), it's not working because counter is private
// counter = 100;

console.log(add());
console.log(add());
console.log(add());