export class Salary {
  companyName: String;
  baseSalary: Number = 0;
  bonus: Number = 0;
  retirementMatch: Number = 0;
  date: Date;

  constructor(companyName: String, baseSalary: Number, bonus: Number, retirementMatch: Number, date: Date) {
    this.companyName = companyName;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
    this.retirementMatch = retirementMatch;
    this.date = date;
  }
}
