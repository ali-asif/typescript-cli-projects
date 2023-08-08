#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

let ans : {
    message: string,
    operator: string, 
    input1: number,
    input2 : number,
} = await inquirer.prompt([
    {
        type: "string",
        name: "message",
        message: (chalk.blueBright("Welcome to my Calculator Program:"))
    },
    {
        type: "list",
        name: "operator",
        choices: ["Addition" , "Substraction" , "Multiplication" , "Division"],
        message: (chalk.green("First select Operator:"))
    },
    {
        type: "number",
        name: "input1",
        message: (chalk.green("Enter first number:"))
    },
    {
        type: "number",
        name: "input2",
        message: (chalk.green("Enter second number:"))
    },

]);

let res: number = 0 ;

    if(ans.operator === "Addition"){
        res = ans.input1 + ans.input2
    } else   if(ans.operator === "Substraction"){
        res = ans.input1 - ans.input2
    }  if(ans.operator === "Division"){
        res = ans.input1 / ans.input2
    }  if(ans.operator === "Multiplication"){
        res = ans.input1 * ans.input2
    }
    console.log(chalk.redBright("Result is : ", res));
  



