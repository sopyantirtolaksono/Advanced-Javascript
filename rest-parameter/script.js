// REST PARAMETER

//  1. Implementation on Arguments
// function myArgs() {
//     return [...arguments];
// }

// console.info(myArgs(1, 2, 3, 4, 5));

// 2. Implementation on SUM Function
// function sum(...numbers) {
//     return numbers.reduce((accu, curVal) => accu + curVal);
// }

// console.info(sum(1, 2, 3, 4, 5));

// 3. Implementation on Array Destructuring
// const group = ["Sopyan", "Yohanes", "Chabib", "Alta", "Yusron", "Randian", "Agus", "Ken Riski"];
// const [leader, secondLeader, ...team] = group;

// console.info(leader);
// console.info(secondLeader);
// console.info(team);

// 4. Implementation on Object Destructuring
// const team = {
//     pm   : "Sopyan",
//     fe   : "Yohanes",
//     be   : "Chabib",
//     uiux : "Alta",
//     qa   : "Yusron",
// };

// const {pm, ...myTeam} = team;

// console.info(pm);
// console.info(myTeam);

// 5. Implementation on Filter Function
function filterBy(type, ...values) {
    return values.filter(data => typeof data === type);
}

console.info(filterBy("string", 2, "Sopyan", "Yohanes", true, 1, false, 3, "Chabib", "Alta"));