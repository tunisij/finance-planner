export class Salary {
  id?: String;
  name: String;
  baseSalary: Number = 0;
  bonus: Number = 0;
  retirementMatch: Number = 0;
  date: Date;

  constructor(name: String, baseSalary: Number, bonus: Number, retirementMatch: Number, date: Date) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
    this.retirementMatch = retirementMatch;
    this.date = date;
  }
}
