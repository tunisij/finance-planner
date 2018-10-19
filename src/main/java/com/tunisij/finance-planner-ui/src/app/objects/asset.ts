export class Asset {
  id?: String;
  name: String;
  value: Number;
  date: Date;

  constructor(name: String, value: Number, date: Date) {
    this.name = name;
    this.value = value;
    this.date = date;
  }
}
