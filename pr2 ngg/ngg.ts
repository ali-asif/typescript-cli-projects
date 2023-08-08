import inquirer from "inquirer";


const rannumber = Math.floor(Math.random() * 10);

const input : Number = await inquirer.prompt([
    {
        type: "number",
        name: "userinput",
        message: "Enter any number from 0 to 10",

    }
])

  
if(input === rannumber){
    console.log("congratulations you chose a correct number" + " " + input );

}else {
    console.log("try again");
}
