import { Component, OnInit } from '@angular/core';
import {InputDataService} from '../../input-data-flow/service/input-data.service';
import {Salary} from '../../objects/salary';

@Component({
  selector: 'app-salary-breakdown',
  templateUrl: './salary-breakdown.component.html',
  styleUrls: ['./salary-breakdown.component.css']
})
export class SalaryBreakdownComponent implements OnInit {

 salaries: Salary[];
 total: Salary;
 chartData: any = {};
 chartOptions: any = {};

  colors = [
    '#36A2EB',
    '#8DFF8C',
    '#FFCE56',
    '#D983FF',
    '#FF6130',
    '#A9F0FF',
    '#FFBCCB',
    '#FEFF39',
    '#4FFF2C',
    '#FF6384',
    '#2E27FF'];

  constructor(public inputDataService: InputDataService) {
  }

  ngOnInit() {
    this.chartOptions = {
      scales: {
        xAxes: [{
          stacked: true
        }],

        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'U.S. Dollar $',
          },
          stacked: true
        }]
      }
    };


    this.inputDataService.getSalaries().subscribe(salaries => {
      this.salaries = salaries.map(salary => new Salary(salary.name, salary.baseSalary, salary.bonus, salary.retirementMatch, salary.id));

      this.chartData = {
        labels: this.salaries.map(salary => salary.name),
        datasets: [
          {
            label: 'Base Salary',
            data: this.salaries.map(salary => salary.baseSalary),
            backgroundColor: this.colors[0],
            hoverBackgroundColor: this.colors[0]
          },
          {
            label: 'Bonus',
            data: this.salaries.map(salary => salary.bonus),
            backgroundColor: this.colors[1],
            hoverBackgroundColor: this.colors[1]
          },
          {
            label: '401k',
            data: this.salaries.map(salary => salary.retirementMatch * salary.baseSalary / 100),
            backgroundColor: this.colors[2],
            hoverBackgroundColor: this.colors[2]
          },
        ]
      };

      const baseSalary = this.salaries.reduce((total, salary) => total + salary.baseSalary, 0);
      const bonus = this.salaries.reduce((total, salary) => total + salary.bonus, 0);
      const retirementMatch = this.salaries.reduce((total, salary) => total + salary.retirementMatch * salary.baseSalary / 100, 0);
      this.total = new Salary('Total', baseSalary, bonus, retirementMatch);
    });
  }
}
