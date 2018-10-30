import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActualSpend} from '../../objects/actualSpend';
import {InputDataService} from '../service/input-data.service';
import {BudgetCategory} from '../../objects/budgetCategory';

@Component({
  selector: 'app-actual-spend',
  templateUrl: './actual-spend-input.component.html',
  styleUrls: ['./actual-spend-input.component.css']
})
export class ActualSpendInputComponent implements OnInit, OnDestroy {

  budgetCategories: BudgetCategory[] = [];
  actualSpends: ActualSpend[] = [];
  _selectedIndex = 0;

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index: number) {
    this._selectedIndex = index < 0 ? 0 : index;
  }

  constructor(public inputDataService: InputDataService) { }

  ngOnInit() {
    this.inputDataService.getBudgetCategories().subscribe(budgetCategories => {
      this.budgetCategories = budgetCategories.map(budget => new BudgetCategory(budget.name, budget.amount, budget.id));
    });

    this.inputDataService.getActualSpends().subscribe(actualSpends => {
      this.actualSpends = actualSpends.map(actualSpend => new ActualSpend(actualSpend.amount, actualSpend.date, actualSpend.budgetCategories, actualSpend.id));

      if (this.actualSpends.length === 0) {
        this.addActualSpend();
      }
      this.selectedIndex = this.actualSpends.length - 1;
    });
  }

  ngOnDestroy() {
    this.inputDataService.actualSpends = this.actualSpends;
    this.inputDataService.setActualSpends(this.actualSpends).subscribe();
  }

  onTabClick(index) {
    this.selectedIndex = index;
  }

  addActualSpend() {
    this.actualSpends.push(new ActualSpend(0, new Date(), null));
    this.selectedIndex = this.actualSpends.length - 1;
  }

  delete() {
    if (this.actualSpends[this.selectedIndex].id === undefined) {
      this.actualSpends.splice(this.selectedIndex, 1);
      this.selectedIndex--;
    } else {
      this.inputDataService.deleteActualSpends(this.actualSpends[this.selectedIndex]).subscribe(() => {
        this.actualSpends.splice(this.selectedIndex, 1);
        this.selectedIndex--;
      });
    }
  }

}
