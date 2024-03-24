#! /usr/bin/env node
//To import inquirer is TS, we use this (code/text),
import inquirer from "inquirer";
//we use (const) This is a Variable we can use this variable to store our logic who's not replased,
const answer = await inquirer.prompt([
    { message: "Enter firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter secondNumber", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent", "Remander",],
    }
]);
//conditinal operator,
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponent") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator === "Remander") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Please select valid oprator");
}
