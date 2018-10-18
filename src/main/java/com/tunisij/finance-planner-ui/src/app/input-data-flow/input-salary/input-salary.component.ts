import {Component, OnDestroy, OnInit} from '@angular/core';
import {InputDataService} from '../service/input-data.service';
import {Salary} from '../../objects/salary';

@Component({
  selector: 'app-input-salary',
  templateUrl: './input-salary.component.html',
  styleUrls: ['./input-salary.component.css']
})
export class InputSalaryComponent implements OnInit, OnDestroy {

  salaries: Salary[] = [];
  selectedIndex = 0;

  constructor(public inputDataService: InputDataService) { }

  ngOnInit() {
    if (this.inputDataService.salaries !== undefined) {
      this.salaries = this.inputDataService.salaries;
    } else {
      this.addSalary();
    }
  }

  ngOnDestroy() {
    this.inputDataService.salaries = this.salaries;
  }

  addSalary() {
    this.salaries.push(new Salary('Company ' + (this.salaries.length + 1), 0, 0, 0, new Date()));
    this.selectedIndex = this.salaries.length - 1;
  }
}
