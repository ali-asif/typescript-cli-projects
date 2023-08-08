import inquirer from 'inquirer';
import Bank from './bank.js';
import Auth from './auth.js';
import Account from './account.js';

const auth = new Auth();
const bank = new Bank(auth);

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
          const account: Account = { accountNumber: accountAnswers.accountNumber, balance: accountAnswers.initialBalance, owner: userCredentials.username };
          bank.createAccount(userCredentials, account);
          console.log('Account created successfully!');
          break;
          
        case 'Exit':
          console.log('Goodbye!');
          process.exit();
          break;
      }
    } else {
      console.log('Authentication failed. Please try again.');
      mainMenu();
    }
  }
  
  registerUser();
  mainMenu();