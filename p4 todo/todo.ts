import inquirer from "inquirer";
let todo: string[] = [];
let loop: boolean = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo? ",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todo.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todo.length > 0) {
    console.log("Your TOdo List: \n");
    todo.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}