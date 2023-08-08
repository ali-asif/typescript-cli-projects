import inquirer from "inquirer";
import chalk from "chalk";
let userName = "aliasif";
let pin = 1234;
let ans = await inquirer.prompt([
    {
        type: "string",
        name: "message",
        message: (chalk.blueBright("Welcome to ATM Machine:"))
    },
    {
        type: "string",
        name: "input1",
        message: (chalk.green("Enter UserName in small letters:"))
    },
    {
        type: "number",
        name: "input2",
        message: (chalk.green("Enter your 4-digit pin:"))
    },
]);
let logIn = false;
let currentBalance = 100000;
if (ans.input1 === userName && ans.input2 === pin) {
    logIn = true;
    console.log("success");
}
if (logIn === true) {
    console.log(currentBalance);
}
else
    console.log("invalid userid or pin ");
