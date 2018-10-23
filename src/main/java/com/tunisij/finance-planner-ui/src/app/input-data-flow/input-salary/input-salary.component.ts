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
  _selectedIndex = 0;

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index: number) {
    this._selectedIndex = index < 0 ? 0 : index;
  }

  constructor(public inputDataService: InputDataService) { }

  ngOnInit() {
    this.inputDataService.getSalaries().subscribe(salaries => {
      this.salaries = salaries.map(salary => new Salary(salary.name, salary.baseSalary, salary.bonus, salary.retirementMatch, salary.id));

      if (this.salaries.length === 0) {
        this.addSalary();
      }
      this.selectedIndex = this.salaries.length - 1;
    });
  }

  ngOnDestroy() {
    this.inputDataService.salaries = this.salaries;
    this.inputDataService.setSalaries(this.salaries).subscribe();
  }

  onTabClick(index) {
    this.selectedIndex = index;
  }

  addSalary() {
    this.salaries.push(new Salary('Company ' + (this.salaries.length + 1), 0, 0, 0));
    this.selectedIndex = this.salaries.length - 1;
  }

  delete() {
    if (this.salaries[this.selectedIndex].id === undefined) {
      this.salaries.splice(this.selectedIndex, 1);
      this.selectedIndex--;
    } else {
      this.inputDataService.deleteSalary(this.salaries[this.selectedIndex]).subscribe(() => {
        this.salaries.splice(this.selectedIndex, 1);
        this.selectedIndex--;
      });
    }
  }
}
