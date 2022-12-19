// TEMPLATE LITERALS

// 1. Concat Basic
// const name  = "Sopyan";
// const age   = 17;

// console.info("My name is " + name + " I am " + age + " y.o");


// 2. Embedded Expressions
// const name      = "Sopyan";
// const age       = 17;
// const number    = 10;

// console.info(`My name is ${name} I am ${age} y.o`);
// console.info(`${(number % 2 === 0 ? 'even' : 'odd')}`);


// 3. Multi Line String
// const name      = "Sopyan";
// const age       = 17;

// console.info(`My name is ${name},
// I am ${age} y.o`);


// 4. HTML Fragments
// const student = {
//     name : "Sopyan",
//     age  : 17
// };

// const el = `<div style="color: #ffffff;">
// <h1>${student.name}</h1>
// <h3>${student.age}</h3>
// </div>`;

// 4.1. HTML Fragments with Looping
// const students = [
//     {
//         name : "Sopyan",
//         nim  : "2114R0879",
//         email : "sopyan@gmail.com",
//         gpa : 3.41
//     },
//     {
//         name : "Yohanes",
//         nim  : "2114R0878",
//         email : "yohanes@gmail.com",
//         gpa : 3.41
//     }
// ];

// const el = `<div style="color: white;">
// ${students.map(data => {
//     return `<ul>
//     <li>${data.name}</li>
//     <li>${data.nim}</li>
//     <li>${data.email}</li>
//     <li>${data.gpa}</li>
//     </ul>`;
// }).join("")}
// </div>`;

// 4.2. HTML Fragments with Conditionals(Ternary)
// const song = {
//     title   : "Jalan Hidupku",
//     artist  : "Alta",
//     feat    : "Izza"
// };

// const el = `<div style="color: white;">
// <h1>Song</h1>
// <ul>
// <li>Title   : ${song.title}</li>
// <li>Artist  : ${song.artist}</li>
// ${(song.feat ? `<li>Feat : ${song.feat}</li>` : "")}
// </ul>
// </div>`;

// 4.3. HTML Fragments with Nested
// const student = {
//     name  : "Sopyan",
//     nim   : "2114R0879",
//     email : "sopyan@gmail.com",
//     study : [
//         "Design Graphic",
//         "Web Programming",
//         "OOP",
//         "Cyber Security"
//     ]
// }

// function printStudy(study) {
//     return `<ul>
//         ${study.map(data => `<li>${data}</li>`).join("")}
//     </ul>`;
// }

// const el = `<div style="color: white;">
// <h1>Student</h1>
// <ol>
//     <li>Name    : ${student.name}</li>
//     <li>Nim     : ${student.nim}</li>
//     <li>Email   : ${student.email}</li>
//     <li>Study   : ${printStudy(student.study)}</li>
// </ol>
// </div>
// `;

// console.info(el);
// document.body.innerHTML = el;


// 5. Tagged Template Literals
// Create variabels
const name  = "Sopyan";
const age   = 17;
const email = "sopyan@gmail.com";

// Create highlight function with 2 params
// strings params is all string values from argument => result as array of string
// values params(rest params) is all expression(variabel) from argument => result as array
function highlight(strings, ...values) {
    // Concat values
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

// Run highlight function & string of template literals as arguments
const str = highlight`Hello, my name is ${name}, I'am ${age} y.o, my email is ${email}`;
// Print result
console.info(str);
document.body.innerHTML = str;