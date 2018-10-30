import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-data-flow',
  templateUrl: './input-data-flow.component.html',
  styleUrls: ['./input-data-flow.component.css']
})
export class InputDataFlowComponent implements OnInit {

  items: MenuItem[];
  activeIndex = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [{
      label: 'Salary',
      command: (event: any) => {
        this.activeIndex = 0;
        this.router.navigate(['input-data', 'salary-input']);
      }
    },
      {
        label: 'Accounts',
        command: (event: any) => {
          this.activeIndex = 1;
          this.router.navigate(['input-data', 'account-input']);
        }
      },
      {
        label: 'Assets',
        command: (event: any) => {
          this.activeIndex = 2;
          this.router.navigate(['input-data', 'asset-input']);
        }
      },
      {
        label: 'Budget',
        command: (event: any) => {
          this.activeIndex = 3;
          this.router.navigate(['input-data', 'budget-input']);
        }
      },
    ];
  }

}
