import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    constructor(name) {
        this.name = name;
        this.studentID = `S${Student.idCounter++}`;
        this.courses = [];
        this.balance = 0;
    }
    enroll(course) {
        this.courses.push(course);
    }
    viewBalance() {
        return this.balance;
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    NewTuition(amount) {
        this.balance += amount;
    }
    showStatus() {
        console.log(chalk.yellow("Student Status:"));
        console.log(chalk.green(`Name: ${this.name}`));
        console.log(chalk.green(`Student ID: ${this.studentID}`));
        console.log(chalk.green("Courses Enrolled:"));
        for (const course of this.courses) {
            console.log(chalk.green(`- ${course}`));
        }
        console.log(chalk.green(`Balance: $${this.balance}`));
    }
}
Student.idCounter = 1000;
async function main() {
    console.clear();
    const students = [];
    console.log(chalk.bold.green("==========================================="));
    console.log(chalk.bold.red("  Welcome to the School Management System"));
    console.log(chalk.bold.green("==========================================="));
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Choose an operation:",
                choices: [
                    "Add New Student",
                    "Enroll Student",
                    "View Balance",
                    "Add Tuition Fees",
                    "Pay Tuition Fees",
                    "Show Status",
                    "Exit",
                ],
            },
        ]);
        switch (choice) {
            case "Add New Student":
                const { studentName } = await inquirer.prompt([
                    {
                        type: "input",
                        name: "studentName",
                        message: "Enter student name:",
                    },
                ]);
                students.push(new Student(studentName));
                console.log(chalk.green("Student added successfully!"));
                break;
            case "Enroll Student":
                const { studentIndex, course } = await inquirer.prompt([
                    {
                        type: "list",
                        name: "studentIndex",
                        message: "Select a student:",
                        choices: students.map((student, index) => ({
                            name: student.name,
                            value: index,
                        })),
                    },
                    {
                        type: "input",
                        name: "course",
                        message: "Enter course name to enroll:",
                    },
                ]);
                students[studentIndex].enroll(course);
                console.log(chalk.green("Student enrolled in the course successfully!"));
                break;
            case "View Balance":
                const { studentIndexView } = await inquirer.prompt([
                    {
                        type: "list",
                        name: "studentIndexView",
                        message: "Select a student:",
                        choices: students.map((student, index) => ({
                            name: student.name,
                            value: index,
                        })),
                    },
                ]);
                console.log(chalk.yellow(`Balance for ${students[studentIndexView].name}: $${students[studentIndexView].viewBalance()}`));
                break;
            case "Add Tuition Fees":
                const { studentIndexPayment, amountt } = await inquirer.prompt([
                    {
                        type: "list",
                        name: "studentIndexPayment",
                        message: "Select a student:",
                        choices: students.map((student, index) => ({
                            name: student.name,
                            value: index,
                        })),
                    },
                    {
                        type: "input",
                        name: "amountt",
                        message: "Enter the amount to pay:",
                        validate: (input) => {
                            if (isNaN(parseFloat(input)) || parseFloat(input) <= 0) {
                                return "Invalid amount. Please enter a positive number.";
                            }
                            return true;
                        },
                    },
                ]);
                students[studentIndexPayment].NewTuition(parseFloat(amountt));
                console.log(chalk.green("Tuition fees added successfully!"));
                break;
            case "Pay Tuition Fees":
                const { studentIndexPay, amount } = await inquirer.prompt([
                    {
                        type: "list",
                        name: "studentIndexPay",
                        message: "Select a student:",
                        choices: students.map((student, index) => ({
                            name: student.name,
                            value: index,
                        })),
                    },
                    {
                        type: "input",
                        name: "amount",
                        message: "Enter the amount to pay:",
                        validate: (input) => {
                            if (isNaN(parseFloat(input)) || parseFloat(input) <= 0) {
                                return "Invalid amount. Please enter a positive number.";
                            }
                            return true;
                        },
                    },
                ]);
                students[studentIndexPay].payTuition(parseFloat(amount));
                console.log(chalk.green("Tuition fees paid successfully!"));
                break;
            case "Show Status":
                const { studentIndexStatus } = await inquirer.prompt([
                    {
                        type: "list",
                        name: "studentIndexStatus",
                        message: "Select a student:",
                        choices: students.map((student, index) => ({
                            name: student.name,
                            value: index,
                        })),
                    },
                ]);
                students[studentIndexStatus].showStatus();
                break;
            case "Exit":
                console.log(chalk.yellow("Exiting Student Management System."));
                return;
            default:
                console.log(chalk.red("Invalid choice. Please try again."));
                break;
        }
    }
}
main();
