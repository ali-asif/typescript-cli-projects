import chalk from "chalk";
import inquirer from "inquirer";
var pkr = 0;
var usd = 290;
var gbp = 340;
var sRiyal = 80;
let ans = await inquirer.prompt([
    {
        type: "string",
        name: "message",
        message: (chalk.blueBright("Welcome to my Currency Convertor Program:"))
    },
    {
        type: "list",
        name: "operator",
        choices: ["usd", "gbp", "sRiyal", "pkr"],
        message: (chalk.green("First select Currency:"))
    },
    {
        type: "list",
        name: "operator2",
        choices: ["usd", "gbp", "sRiyal", "pkr"],
        message: (chalk.green("First select Currency:"))
    },
    {
        type: "number",
        name: "input1",
        message: (chalk.green("Enter first number:"))
    },
]);
let res = 0;
if (ans.operator === "usd") {
    res = usd * ans.input1;
}
else if (ans.operator === "pkr") {
    res = ans.input1 / usd;
}
else if (ans.operator === "gbp") {
    res = gbp * ans.input1;
}
console.log(res);
