// CALLBACK

// 1. Synchronous Callback
// ## Example 1
// function sayHello(name) {
//     window.alert(`Hello, ${name}`);
// }

// function showMessage(callback) {
//     const name = prompt("Input your name:");
//     callback(name);
// }

// showMessage(sayHello);
// showMessage((name) => window.alert(`Hello, ${name}`));

// ## Example 2
// const students = [
//     {
//         name: "Sopyan",
//         nim: "2114R0879",
//         email: "sopyan@gmail.com",
//     },
//     {
//         name: "Yohanes",
//         nim: "2114R0878",
//         email: "yohanes@gmail.com",
//     },
//     {
//         name: "Chabib",
//         nim: "2114R0877",
//         email: "chabib@gmail.com",
//     }
// ];

// console.info("Start");
// students.forEach(s => {
//     for(let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.info(s.name);
// });
// console.info("Finish");

// ### Result(Synchronous):
//     1. Print => Start
//     2. Print => Data Students
//     3. Print => Finish


// 2. Asynchronous Callback
function getStudents(url, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                success(xhr.response);
            } else if(xhr.status === 404) {
                error("Oops! Not found.");
            } else {
                error();
            }
        }
    }

    xhr.open("GET", url);
    xhr.send();
}

console.info("Start");
getStudents("data.json", results => {
    const students = JSON.parse(results);
    students.forEach(s => console.info(s.name));
}, (error = "Something wrong!") => {
    console.info(error);
});
console.info("Finish");

// ### Result(Asynchronous):
//     1. Print => Start
//     2. Print => Finish
//     3. Print => Data Students

