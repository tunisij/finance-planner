import {BaseObject} from './baseObject';

export class Account extends BaseObject {
  name: String;
  balance = 0;

  constructor(name: String, balance: number, date: any, id?: String) {
    super(date, id);
    this.name = name;
    this.balance = balance;
  }
}
