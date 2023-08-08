import  Account  from "./account.js";
import  Transaction  from './transaction.js';
import Auth from "./auth.js";
import User from "./user.js";

class Bank {
  private accounts: Account[] = [];

  constructor(private auth: Auth) {}

  createAccount(user: User, account: Account): void {
    if (this.auth.login(user.username, user.password)) {
      account.owner = user.username;
      this.accounts.push(account);
    } else {
      console.log('Authentication failed.');
    }
  }
  getAccount(accountNumber: string): Account | undefined {
    return this.accounts.find(acc => acc.accountNumber === accountNumber);
  }

  deposit(accountNumber: string, amount: number, description: string): void {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.balance += amount;
      const transaction: Transaction = { date: new Date(), amount, description };
      this.recordTransaction(account, transaction);
    }
}
    withdraw(accountNumber: string, amount: number, description: string): void {
        const account = this.getAccount(accountNumber);
        if (account && account.balance >= amount) {
          account.balance -= amount;
          const transaction: Transaction = { date: new Date(), amount: -amount, description };
          this.recordTransaction(account, transaction);
    }
    }
    private recordTransaction(account: Account, transaction: Transaction): void {
        if (!account.transactions) {
          account.transactions = [];
        }
        account.transactions.push(transaction);
      }
    }


export default Bank;




