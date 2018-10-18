export class Account {
  accountName: String;
  balance: Number;
  date: Date;

  constructor(accountName: String, balance: Number, date: Date) {
    this.accountName = accountName;
    this.balance = balance;
    this.date = date;
  }
}
