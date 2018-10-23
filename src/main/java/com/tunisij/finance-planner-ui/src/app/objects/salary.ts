export class Salary {
  id?: String;
  name: String;
  baseSalary = 0;
  bonus = 0;
  retirementMatch = 0;

  constructor(name: String, baseSalary: number, bonus: number, retirementMatch: number, id?: String) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
    this.retirementMatch = retirementMatch;
    this.id = id;
  }
}
