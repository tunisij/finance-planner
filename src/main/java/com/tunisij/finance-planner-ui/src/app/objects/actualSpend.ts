export class ActualSpend {
  id?: String;
  actualSpendId: String;
  budgetCategoryId: String;
  name: String;
  amount = 0;
  category: String;

  constructor(amount: number, name: String, category: String, actualSpendId: String, budgetCategoryId: String, id?: String) {
    this.amount = amount;
    this.actualSpendId = actualSpendId;
    this.name = name;
    this.id = id;
    this.category = category;
    this.budgetCategoryId = budgetCategoryId;
  }
}
