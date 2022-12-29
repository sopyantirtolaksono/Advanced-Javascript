// SPREAD OPERATOR

// 1. Breaking Iterables Into a Single Element
// const students  = ["Sopyan", "Yohanes", "Chabib"];
// const student   = [...students[0]];

// console.info(student);
// console.info(...students[0]);

// 2. Concat 2 Arrays or more with Spread Operator
// const students   = ["Sopyan", "Yohanes", "Chabib"];
// const teachers   = ["Septi", "Solihin", "Eko"];
// const drinks     = ["Coffee", "Milk", "Tea"];

// // With Concat Method
// // const persons    = students.concat(teachers, drinks);

// // With Spread Operator
// // const persons    = [...students, ...teachers, ...drinks];
// const persons    = [...students, ...teachers, "Cake", "Noodle", "Steak", ...drinks];

// console.info(persons);

// 3. Copying Array
// const students   = ["Sopyan", "Yohanes", "Chabib"];

// // This is Reference
// // const persons    = students;

// // This is Copying Array
// const persons    = [...students];

// // Replacing Index 0
// persons[0] = "Ferry";

// console.info(students);
// console.info(persons);

// 4. Implementation on HTML Element
const liStudents = document.querySelectorAll("li");
const students   = [...liStudents].map(s => s.textContent);

console.info(students);