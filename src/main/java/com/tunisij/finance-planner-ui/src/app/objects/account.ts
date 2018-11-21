import {BaseObject} from './baseObject';

export class Account extends BaseObject {
  name: String;
  balance = 0;

  constructor(name: String, balance: number, id?: String) {
    super(id);
    this.name = name;
    this.balance = balance;
  }
}
