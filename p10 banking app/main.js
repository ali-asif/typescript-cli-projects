import inquirer from 'inquirer';
import Bank from './bank.js';
import Auth from './auth.js';
const auth = new Auth();
const bank = new Bank(auth);
// Register users
// auth.register('john', 'pass123');
// auth.register('jane', 'pass456');
// Login
// const johnLoggedIn = auth.login('john', 'pass123');
// const janeLoggedIn = auth.login('jane', 'pass456');
// if (johnLoggedIn) {
//   const johnAccount: Account = { accountNumber: '123456', balance: 1000, owner: '' };
//   bank.createAccount({ username: 'john', password: 'pass123' }, johnAccount);
//   bank.deposit('123456', 200, 'Salary deposit');
//   bank.withdraw('123456', 50, 'Grocery shopping');
//   console.log(bank.getAccount('123456'));
// }
// if (janeLoggedIn) {
//   const janeAccount: Account = { accountNumber: '789012', balance: 500, owner: '' };
//   bank.createAccount({ username: 'jane', password: 'pass456' }, janeAccount);
//   bank.deposit('789012', 100, 'Allowance');
//   console.log(bank.getAccount('789012'));
// }
async function registerUser() {
    const registrationQuestions = [
        { type: 'input', name: 'username', message: 'Enter your username:' },
        { type: 'password', name: 'password', message: 'Enter your password:' }
    ];
    const registrationAnswers = await inquirer.prompt(registrationQuestions);
    auth.register(registrationAnswers.username, registrationAnswers.password);
    console.log('Registration successful!');
}
async function mainMenu() {
    const menuQuestions = [
        { type: 'input', name: 'username', message: 'Enter your username:' },
        { type: 'password', name: 'password', message: 'Enter your password:' }
    ];
    const userCredentials = await inquirer.prompt(menuQuestions);
    if (auth.login(userCredentials.username, userCredentials.password)) {
        const actions = [
            { type: 'list', name: 'action', message: 'Choose an action:', choices: ['Create Account', 'Deposit', 'Withdraw', 'Exit'] }
        ];
        const selectedAction = await inquirer.prompt(actions);
        switch (selectedAction.action) {
            case 'Create Account':
                const accountQuestions = [
                    { type: 'input', name: 'accountNumber', message: 'Enter account number:' },
                    { type: 'number', name: 'initialBalance', message: 'Enter initial balance:' }
                ];
                const accountAnswers = await inquirer.prompt(accountQuestions);
                const account = { accountNumber: accountAnswers.accountNumber, balance: accountAnswers.initialBalance, owner: userCredentials.username };
                bank.createAccount(userCredentials, account);
                console.log('Account created successfully!');
                break;
            // Implement other actions like Deposit, Withdraw, etc.
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
                break;
        }
    }
    else {
        console.log('Authentication failed. Please try again.');
        mainMenu();
    }
}
registerUser();
mainMenu();
