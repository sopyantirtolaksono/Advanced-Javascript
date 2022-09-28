// CONTEXT-HOISTING-SCOPE-CLOSURE

// 1. Execution Context(Creation phase - Execution phase), Hoisting & Scope
// Creation phase & Hoisting
function one() {
	var nama = "Sopyan";
	console.log(nama);
}

// Creation phase & Hoisting
function two() {
	// Scope(Access to global scope/window)
	console.log(nama);
}

// Execution phase
console.log(nama);

// Creation phase & Hoisting
var nama = "Ferry";

// Execution phase
one();

// Execution phase
two("Indah");

// Execution phase
console.log(nama);