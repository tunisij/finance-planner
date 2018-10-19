import {BaseObject} from './baseObject';

export class Account extends BaseObject {
  name: String;
  balance: Number;

  constructor(name: String, balance: Number, date: Date, id?: String) {
    super();
    this.name = name;
    this.balance = balance;
    this.date = date;
    this.id = id;
  }
}
