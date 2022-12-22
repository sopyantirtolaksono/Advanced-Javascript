// FOR OF & FOR IN

// 1. For...Of => Iterable Object(Array, String, NodeList, Arguments)
// 1.1 Looping Array
// const students = ["Sopyan", "Yohanes", "Chabib"];
// for(const student of students) {
//     console.info(student);
// }

// 1.2 Looping String
// const name = "Sopyan";
// for(const n of name) {
//     console.info(n);
// }

// 1.3 Looping Array with Index
// const students = ["Sopyan", "Yohanes", "Chabib"];
// for(const [i, student] of students.entries()) {
//     console.info(`Index ${i} is ${student}`);
// }

// 1.4 Looping NodeList
// const liName = document.querySelectorAll("ul>li.name");
// console.info(liName);
// for(const name of liName) {
//     console.info(name.innerHTML);
// }

// 1.5 Looping Arguments
// function sumNumbers() {
//     let result = 0;
//     for(const numb of arguments) {
//         result += numb;
//     }

//     return result;
// }

// console.info(sumNumbers(1, 2, 3, 4, 5));



// 2. For...In => Enumerable(Property/Key of Object)
// 2.1 Looping Object
const student = {
    name    : "Sopyan",
    nim     : "2114R0879",
    email   : "sopyan@gmail.com"
};

for(const key in student) {
    console.info(`Key: ${key}`);
    console.info(`Value: ${student[key]}`);
}
