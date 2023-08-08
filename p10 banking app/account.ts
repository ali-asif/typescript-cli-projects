import Transaction  from "./transaction.js";

interface Account {
    accountNumber: string;
    balance: number;
    owner: string;
    transactions?: Transaction[];
  }

export default Account
