import { Injectable } from '@angular/core';
import {Account} from '../objects/account';
import {Salary} from '../objects/salary';

@Injectable({
  providedIn: 'root'
})
export class InputDataService {

  accounts: Account[];
  salaries: Salary[];

  constructor() { }

}
