// PROMISE

// Promise is an object that represents the success / failure of an asynchronous event in the future
// Promise (Fulfilled / Rejected)
// State (Fulfilled / Rejected / Pending)
// Callback (Resolve / Reject / Finally)
// Action (Then / Catch)

// 1. Create New Promise

// ## Example 1
// Condition
// let condition = true;
// New Promise
// const promise = new Promise((resolve, reject) => {
//     if(condition) {
//         resolve("Resolve...");
//     } else {
//         reject("Reject...");
//     }
// });

// Print with State (Fulfilled / Rejected / Pending)
// console.info(promise);

// Print without State (Fulfilled / Rejected / Pending)
// promise
//     .then(response => console.info(`OK: ${response}`))
//     .catch(response => console.info(`NOT OK: ${response}`));

// ## Example 2
// Condition
// let condition = true;
// New Promise
// const promise = new Promise((resolve, reject) => {
//     if(condition) {
//         setTimeout(() => {
//             resolve("Resolve...");
//         }, 3000);
//     } else {
//         setTimeout(() => {
//             reject("Reject...");
//         }, 3000);
//     }
// });

// Print Start
// console.info("Start");

// Print with State (Fulfilled / Rejected / Pending)
// console.info(promise.then(() => console.info(promise)).catch(() => console.info(promise)));

// Print without State (Fulfilled / Rejected / Pending)
// promise
//     .finally(() => console.info("Loading complete..."))
//     .then(response => console.info(`OK: ${response}`))
//     .catch(response => console.info(`NOT OK: ${response}`));

// Print Finish
// console.info("Finish");



// 2. Promise.all (Running All Promise)
// New Promise
const student = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            name: "Yohanes",
            nim: "2114R0879",
            email: "yohanes@gmail.com"
        }]);
    }, 2000);
});

// New Promise
const movie = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            title: "Fast 9",
            actor: "Vin Dissel",
            producer: "Sopyan Tirto Laksono"
        }]);
    }, 1000);
});

// Print Result
// console.info("Start");
// console.info(student.then(() => console.info(student)));
// console.info(movie.then(() => console.info(movie)));
// console.info("Finish");

// Running All Promise
// Promise.all([student, movie])
//     .then(response => {
//         const [student, movie] = response;
//         console.info(student);
//         student.forEach(s => console.info(s.name));
        
//         console.info(movie);
//         movie.forEach(m => console.info(m.title));
//     })
//     .catch(response => console.info(response));



// 3. Promise.race (First Finish)
Promise.race([student, movie])
    .then(response => console.info(...response));