// ARROW-FUNCTION

// Create array students
let students = ["Sopyan", "Yohanes", "Chabib"];

// Map students with one line
// let student = students.map(name => name.length);

// Map students and push name length to room
// let room = [];
// let student = students.map(name => {
//     room.push(name.length);
//     if(room.length > 1) {
//         close;
//     }
//     return room;
// });

// Map students & replace character "c"/"C" to "?"
// let newName = "";
// let student = students.map((name, i) => {
//     newName = "";
//     for(let j = 0; j < name.length; j++) {
//         if(name[j] == "c" || name[j] == "C") {
//             // name = "BOOM";
//             newName += "?";
//         } else {
//             newName += name[j];
//         }
//     }

//     // room.push(name);
//     room.push(newName);
//     return room;
// });

// Map students & create new object
let student = students.map(name => ({
    "name" : name,
    "length" : name.length
}));

// Print the result
// console.log(room);
console.log(student);