export class BudgetCategory {
  id?: String;
  name: String;
  amount = 0;

  constructor(name: String, amount: number, id?: String) {
    this.name = name;
    this.amount = amount;
    this.id = id;
  }
}
