import { Component, OnInit } from '@angular/core';
import {InputDataService} from '../../input-data-flow/service/input-data.service';
import {BudgetCategory} from '../../objects/budgetCategory';

@Component({
  selector: 'app-budget-breakdown',
  templateUrl: './budget-breakdown.component.html',
  styleUrls: ['./budget-breakdown.component.css']
})
export class BudgetBreakdownComponent implements OnInit {

  budgetCategories: BudgetCategory[];
  total: number;
  chartData: any = {};

  constructor(public inputDataService: InputDataService) {
  }

  ngOnInit() {
    this.inputDataService.getBudgetCategories().subscribe(categories => {
      this.budgetCategories = categories.map(category => new BudgetCategory(category.name, category.amount, category.id));

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
          },
        ]
      };
      this.total = this.budgetCategories.reduce((total, category) => total + category.amount, 0);
    });
  }

}
