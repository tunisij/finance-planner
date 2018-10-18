import { Injectable } from '@angular/core';
import {Account} from '../objects/account';
import {Salary} from '../objects/salary';
import {Asset} from '../objects/asset';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InputDataService {

  accounts: Account[];
  salaries: Salary[];
  assets: Asset[];

  constructor(private http: HttpClient) { }

  getSalary(): Observable<any> {
    return this.http.get(environment.salaries);
  }

  setSalary(salary: Salary) {
    return this.http.post<Salary>(environment.salaries, salary);
  }

}
