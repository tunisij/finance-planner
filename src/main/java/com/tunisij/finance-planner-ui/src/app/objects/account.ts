import {BaseObject} from './baseObject';

export class Account extends BaseObject {
  name: String;
  balance: Number;

  constructor(name: String, balance: Number, date: any, id?: String) {
    super(date, id);
    this.name = name;
    this.balance = balance;
  }
}
