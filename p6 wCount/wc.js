import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = ans.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
