export class Asset {
  name: String;
  value: Number;
  date: Date;

  constructor(name: String, value: Number, date: Date) {
    this.name = name;
    this.value = value;
    this.date = date;
  }
}
