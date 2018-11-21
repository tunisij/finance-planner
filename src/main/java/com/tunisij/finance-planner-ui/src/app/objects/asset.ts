import {BaseObject} from './baseObject';

export class Asset extends BaseObject {
  name: String;
  value = 0;

  constructor(name: String, value: number, id?: String) {
    super(id);
    this.name = name;
    this.value = value;
  }
}
