export class Salary {
  companyName?: String;
  baseSalary?: Number;
  bonus?: Number;
  retirementMatch?: Number;

  constructor(companyName?: String, baseSalary?: Number, bonus?: Number, retirementMatch?: Number) {
    this.companyName = companyName;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
    this.retirementMatch = retirementMatch;
  }
}
