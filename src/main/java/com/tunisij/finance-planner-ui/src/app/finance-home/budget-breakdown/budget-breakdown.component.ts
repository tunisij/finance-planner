import { Component, OnInit } from '@angular/core';
import {InputDataService} from '../../input-data-flow/service/input-data.service';
import {BudgetCategory} from '../../objects/budgetCategory';
import {forkJoin} from 'rxjs';
import {ActualSpend} from '../../objects/actualSpend';

@Component({
  selector: 'app-budget-breakdown',
  templateUrl: './budget-breakdown.component.html',
  styleUrls: ['./budget-breakdown.component.css']
})
export class BudgetBreakdownComponent implements OnInit {

  actualSpendIds: string[] = [];
  actualSpends: ActualSpend[];
  budgetCategories: BudgetCategory[];
  total: number;
  chartData: any = {};

  colors = [
    'rgba(179,181,198,',
    'rgba(66, 134, 244,',
    'rgba(65, 244, 68,',
    'rgba(220, 63, 244,',
    'rgba(63, 228, 244,',
    'rgba(59, 46, 234,',
    'rgba(229, 154, 34,',
    'rgba(206, 41, 159,'];

  constructor(public inputDataService: InputDataService) {
  }

  ngOnInit() {
    forkJoin([this.inputDataService.getBudgetCategories(), this.inputDataService.getActualSpends()]).subscribe(results => {
      this.budgetCategories = results[0].map(category => new BudgetCategory(category.name, category.amount, category.id));
      this.actualSpends = results[1];

      let actualSpendsDatasets = [];
      this.actualSpendIds = this.getUniqueArray(this.actualSpends.map(actualSpend => actualSpend.actualSpendId));
      this.actualSpendIds.forEach((actualSpendId, index) => {
        actualSpendsDatasets.push(
          {
            label: this.actualSpends[this.getActualSpendIndex(actualSpendId)].name,
            data: this.actualSpends.filter(actualSpend => actualSpend.actualSpendId === actualSpendId).map(actualSpend => actualSpend.amount),
            backgroundColor: this.colors[index] + '0.2)',
            borderColor: this.colors[index] + '1)',
            pointBackgroundColor: this.colors[index] + '1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: this.colors[index] + '1)',
          }
        );
      });

      this.chartData = {
        labels: this.budgetCategories.map(category => category.name),
        datasets: [
          {
            label: 'Current Budget',
            data: this.budgetCategories.map(category => category.amount),
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
          }
        ].concat(actualSpendsDatasets)
      };
      this.total = this.budgetCategories.reduce((total, category) => total + category.amount, 0);
    });
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
