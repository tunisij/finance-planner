export class House {
  houseName?: String;
  value?: Number;
  squareFeet?: Number;

  constructor(houseName?: String, value?: Number, squareFeet?: Number) {
    this.houseName = houseName;
    this.value = value;
    this.squareFeet = squareFeet;
  }
}
