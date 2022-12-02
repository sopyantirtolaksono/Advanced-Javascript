// HIGHER ORDER FUNCTION
// Outer function return Inner function it's Higher Order Function
// Callback also Higher Order Function
// Filter, Map, Reduce, ... it's Higher Order Function

// Array of Numbers
const numbers = [2, 3, 4, 1];

// FIlter
// const number = numbers.filter(a => a > 2);

// Map
// const number = numbers.map(a => a * 2);

// Reduce
// Reduce without custom accumulator(By Default)
// const number = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// Reduce with custom accumulator
// const number = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 5);

// Filter, Map, Reduce with Chaining(Oneline)
// const number = numbers.filter(a => a > 2).map(a => a * 2).reduce((a, b) => a + b);

// Filter, Map, Reduce with Chaining(No Oneline)
const number = numbers.filter(a => {
    return a > 2;
})
.map(a => {
    return a * 2;
})
.reduce((a, b) => {
    return a + b;
});


// Print Result
console.info(numbers);
console.info(number);


