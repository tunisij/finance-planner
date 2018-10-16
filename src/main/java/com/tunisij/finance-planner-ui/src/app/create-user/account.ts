export class Account {
  accountName?: String;
  balance?: Number;

  constructor(accountName?: String, balance?: Number) {
    this.accountName = accountName;
    this.balance = balance;
  }
}
