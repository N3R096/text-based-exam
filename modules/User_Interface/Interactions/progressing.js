const readline = require("readline-sync");

// function getField1Input() {
//   return readline.question("Field 1: Do you want to move forward? (y/n): ");
// }

// function getField2Input() {
//   return readline.question("Field 2: Do you want to proceed? (y/n): ");
// }

// function main() {
//   let field1Response = getField1Input();

//   if (field1Response.toLowerCase() === "y") {
//     let field2Response = getField2Input();

//     if (field2Response.toLowerCase() === "n") {
//       // Player wants to go back to Field 1
//       field1Response = getField1Input();
//     }
//   }

//   console.log("Game Over");
// }

// main();
function ProgressQuestion() {
       return readline.question(`Progress? Type in : y

       -------------------------------------------------------------------
       YOUR INPUT:
       `);
     }
function progress(){
    progress=ProgressQuestion()
}

module.exports ={
    progress,
    ProgressQuestion,
    
}