import {BaseObject} from './baseObject';

export class Salary extends BaseObject {
  name: String;
  baseSalary = 0;
  bonus = 0;
  retirementMatch = 0;

  constructor(name: String, baseSalary: number, bonus: number, retirementMatch: number, date: any, id?: String) {
    super(date, id);
    this.name = name;
    this.baseSalary = baseSalary;
    this.bonus = bonus;
    this.retirementMatch = retirementMatch;
  }
}
