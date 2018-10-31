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
  actualSpendIds: string[] = [];
  _selectedIndex = 0;

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index: number) {
    this._selectedIndex = index < 0 ? 0 : index;
  }

  constructor(public inputDataService: InputDataService) { }

  ngOnInit() {
    this.inputDataService.getActualSpends().subscribe(actualSpends => {
      this.actualSpends = actualSpends;
      this.actualSpendIds = this.getUniqueArray(actualSpends.map(actualSpend => actualSpend.actualSpendId));

      if (this.actualSpendIds.length === 0) {
        this.addActualSpend();
      }
      this.selectedIndex = this.actualSpendIds.length - 1;
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
    this.inputDataService.getActualSpends(this.actualSpendIds.length).subscribe(actualSpends => {
      this.actualSpends = this.actualSpends.concat(actualSpends);
      this.actualSpendIds.push(this.actualSpendIds.length.toString());
      this.selectedIndex = this.actualSpendIds.length - 1;
    });
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

  getActualSpends(index: number): ActualSpend[] {
    return this.actualSpends.filter(actualSpend => Number(actualSpend.actualSpendId) === index);
  }

  getActualSpendIndex(actualSpendId) {
    return this.actualSpends.map(actualSpend => Number(actualSpend.actualSpendId)).indexOf(actualSpendId);
  }

  getUniqueArray(array) {
    let result = [];
    for (let x = 0; x < array.length; x++) {
      if (result.indexOf(array[x]) === -1) {
        result.push(array[x]);
      }
    }
    return result;
  }

}
