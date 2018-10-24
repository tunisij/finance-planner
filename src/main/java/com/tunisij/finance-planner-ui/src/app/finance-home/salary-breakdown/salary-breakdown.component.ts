import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-breakdown',
  templateUrl: './salary-breakdown.component.html',
  styleUrls: ['./salary-breakdown.component.css']
})
export class SalaryBreakdownComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  ngOnInit() {
  }

}
