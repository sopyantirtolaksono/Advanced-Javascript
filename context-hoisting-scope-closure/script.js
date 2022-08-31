// CONTEXT-HOISTING-SCOPE-CLOSURE

// 1. Execution Context, Hoisting & Scope
function one() {
	var nama = "Sopyan";
	console.log(nama);
}

function two() {
	console.log(nama);
}

console.log(nama);

var nama = "Ferry";

one();

two("Indah");

console.log(nama);
