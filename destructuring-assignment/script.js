// DESTRUCTURING ASSIGNMENT / VARIABLE

// 1. Destructuring Array
// const student = ["Sopyan", 17, "2114R0879", "sopyan@gmail.com"];

// 1.1 Normal
// const [name, age, nim, email] = student;
// console.info(`Name: ${name}, Age: ${age}, NIM: ${nim}, Email: ${email}`);

// 1.2 Skipping Items
// const [name, , , email] = student;
// console.info(`Name: ${name}, Email: ${email}`);

// 1.3 Swap Items
// let food    = "Cake";
// let drink   = "Coffee";

// console.info(food);
// console.info(drink);

// [food, drink] = [drink, food];

// console.info(food);
// console.info(drink);

// 1.4 Return Value on Function
// function testing() {
//     return [1, 2, 3];
// }

// const [one, two, three] = testing();
// console.info(two);

// 1.5 Rest Parameter
// const [one, ...values] = [1, 2, 3, 4, 5];
// console.info(one);
// console.info(values);



// 2. Destructuring Object
// 2.1 Normal
// const student = {
//     name    : "Sopyan",
//     age     : 17,
//     nim     : "2114R0879",
//     email   : "sopyan@gmail.com"
// };

// const {name, nim, age, email} = student;
// console.info(`Name: ${name}, Age: ${age}, NIM: ${nim}, email: ${email}`);

// 2.2 Assign without Declare Object
// ({name, age, nim, email} = {name: "Sopyan", age: 17, nim: "2114R0879", email: "sopyan@gmail.com"});
// console.info(`Name: ${name}, Age: ${age}, NIM: ${nim}, Email: ${email}`);

// 2.3 Assign to New Variable
// const student = {
//     name    : "Sopyan",
//     age     : 17,
//     nim     : "2114R0879",
//     email   : "sopyan@gmail.com"
// };

// const {name: na, age: ag, nim: ni, email: em} = student;
// console.info(`Name: ${na}, Age: ${ag}, NIM: ${ni}, Email: ${em}`);

// 2.4 Assign to New Variable(Rename) & Give Default Value
// const student = {
//     name    : "Sopyan",
//     age     : 17,
//     nim     : "2114R0879",
//     // email   : "sopyan@gmail.com"
// };

// const {name: na, age: ag, nim: ni, email: em = "default-email@gmail.com"} = student;
// console.info(`Name: ${na}, Age: ${ag}, NIM: ${ni}, Email: ${em}`);

// 2.5 Take Field on Object, after Sent as Param for Function
// const student = {
//     id      : 1234,
//     name    : "Sopyan",
//     age     : 17,
//     nim     : "2114R0879",
//     email   : "sopyan@gmail.com"
// };

// function getStudentId({ id }) {
//     return id;
// }

// console.info(getStudentId(student));

// 2.6 Nested Destructuring
const student = {
    id      : 1234,
    name    : "Sopyan",
    age     : 17,
    nim     : "2114R0879",
    email   : "sopyan@gmail.com",
    poin    : {
        presence    : 90,
        uts         : 80,
        uas         : 95
    }
};

function getStudent({ name, nim, poin: { presence, uts, uas } }) {
    return `Name: ${name}, NIM: ${nim}, Poin: Presence: ${presence} | UTS: ${uts} | UAS: ${uas}`;
}

console.info(getStudent(student));