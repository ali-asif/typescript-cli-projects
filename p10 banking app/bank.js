class Bank {
    constructor(auth) {
        this.auth = auth;
        this.accounts = [];
    }
    createAccount(user, account) {
        if (this.auth.login(user.username, user.password)) {
            account.owner = user.username;
            this.accounts.push(account);
        }
        else {
            console.log('Authentication failed.');
        }
    }
    getAccount(accountNumber) {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }
    deposit(accountNumber, amount, description) {
        const account = this.getAccount(accountNumber);
        if (account) {
            account.balance += amount;
            const transaction = { date: new Date(), amount, description };
            this.recordTransaction(account, transaction);
        }
    }
    withdraw(accountNumber, amount, description) {
        const account = this.getAccount(accountNumber);
        if (account && account.balance >= amount) {
            account.balance -= amount;
            const transaction = { date: new Date(), amount: -amount, description };
            this.recordTransaction(account, transaction);
        }
    }
    recordTransaction(account, transaction) {
        if (!account.transactions) {
            account.transactions = [];
        }
        account.transactions.push(transaction);
    }
}
export default Bank;
