import chalk from "chalk";
import inquirer from "inquirer";
let qResult = 0;
let ans = await inquirer.prompt([
    {
        type: "list",
        name: "Question1",
        message: (chalk.blueBright("Javascript is a _____ language.")),
        choices: ["Programming", "Application", "Scripting", "None of the Above"],
    },
    {
        type: "list",
        name: "Question2",
        message: (chalk.blueBright("JavaScript is a _____ Side Scripting Language.")),
        choices: ["Server", "Browser", "ISP", "None of the above"]
    },
    {
        type: "list",
        name: "Question3",
        message: (chalk.blueBright("JavaScript can be written")),
        choices: ["directly on server", "directly in HTML page", "All of the above", "None of these"]
    },
    {
        type: "list",
        name: "Question4",
        message: (chalk.blueBright("JavaScript code is written inside file having extension")),
        choices: [".js", ".jvs", ".jsc", "None of these"]
    },
    {
        type: "list",
        name: "Question5",
        message: (chalk.blueBright("Local Browser used for validations on the Web Pages uses")),
        choices: ["JS", "JAVA", "HTML", "CSS"]
    },
]);
if (ans.Question1 === "Scripting") {
    console.log("correct");
}
else {
    console.log("Wrong Answer");
}
if (ans.Question2 === "Browser") {
    console.log("correct");
}
else {
    console.log("Wrong Answer");
}
if (ans.Question3 === "directly in HTML page") {
    console.log("correct");
}
else {
    console.log("Wrong Answer");
}
if (ans.Question4 === ".js") {
    console.log("correct");
}
else {
    console.log("Wrong Answer");
}
if (ans.Question5 === "JS") {
    console.log("correct");
}
else {
    console.log("Wrong Answer");
}
