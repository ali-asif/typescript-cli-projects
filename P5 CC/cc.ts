import chalk from "chalk";
import inquirer from "inquirer";

var pkr : number  = 0
var usd : number = 290;
var gbp : number = 340; 
var sRiyal : number = 80; 

let ans : {
    message: string,
    operator: string, 
    operater2: string,
    input1: number,
    
} = await inquirer.prompt([
    {
        type: "string",
        name: "message",
        message: (chalk.blueBright("Welcome to my Currency Convertor Program:"))
    },
    {
        type: "list",
        name: "operator",
        choices: ["usd" , "gbp" , "sRiyal", "pkr"],
        message: (chalk.green("First select Currency:"))
    },
    {
        type: "list",
        name: "operator2",
        choices: ["usd" , "gbp" , "sRiyal", "pkr"],
        message: (chalk.green("First select Currency:"))
    },
    {
        type: "number",
        name: "input1",
        message: (chalk.green("Enter first number:"))
    },
  

]);
let res: number = 0
if(ans.operator === "usd"){
   res = usd*ans.input1
}else if(ans.operator ==="pkr"){
    res =  ans.input1 / usd
}else if(ans.operator === "gbp"){
    res = gbp*ans.input1
}

console.log(res)