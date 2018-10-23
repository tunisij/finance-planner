import {BaseObject} from './baseObject';

export class Asset extends BaseObject {
  name: String;
  value = 0;

  constructor(name: String, value: number, date: any, id?: String) {
    super(date, id);
    this.name = name;
    this.value = value;
  }
}
