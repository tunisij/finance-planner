import {BaseObject} from './baseObject';
import {BudgetCategory} from './budgetCategory';

export class ActualSpend extends BaseObject {
  id?: String;
  name: String;
  amount = 0;
  budgetCategories: BudgetCategory[];

  constructor(amount: number, date: Date, budgetCategories: BudgetCategory[], id?: String) {
    super(date, id);
    this.amount = amount;
    this.budgetCategories = budgetCategories;
    this.id = id;
    this.name = date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getFullYear();
  }
}
