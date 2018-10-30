import {Component, OnDestroy, OnInit} from '@angular/core';
import {BudgetCategory} from '../../objects/budgetCategory';
import {InputDataService} from '../service/input-data.service';

@Component({
  selector: 'app-budget-input',
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.css']
})
export class BudgetInputComponent implements OnInit, OnDestroy {

  budgetCategories: BudgetCategory[] = [];
  _selectedIndex = 0;

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index: number) {
    this._selectedIndex = index < 0 ? 0 : index;
  }

  constructor(public inputDataService: InputDataService) { }

  ngOnInit() {
    this.inputDataService.getbudgetCategories().subscribe(budgetCategories => {
      this.budgetCategories = budgetCategories.map(budget => new BudgetCategory(budget.name, budget.amount, budget.id));

      if (this.budgetCategories.length === 0) {
        this.addBudgetCategory();
      }
      this.selectedIndex = this.budgetCategories.length - 1;
    });
  }

  ngOnDestroy() {
    this.inputDataService.budgetCategories = this.budgetCategories;
    this.inputDataService.setbudgetCategories(this.budgetCategories).subscribe();
  }

  onTabClick(index) {
    this.selectedIndex = index;
  }

  addBudgetCategory() {
    this.budgetCategories.push(new BudgetCategory('Category ' + (this.budgetCategories.length + 1), 0));
    this.selectedIndex = this.budgetCategories.length - 1;
  }

  delete() {
    if (this.budgetCategories[this.selectedIndex].id === undefined) {
      this.budgetCategories.splice(this.selectedIndex, 1);
      this.selectedIndex--;
    } else {
      this.inputDataService.deleteBudgetCategories(this.budgetCategories[this.selectedIndex]).subscribe(() => {
        this.budgetCategories.splice(this.selectedIndex, 1);
        this.selectedIndex--;
      });
    }
  }

}
