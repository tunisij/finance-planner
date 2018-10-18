import { Injectable } from '@angular/core';
import {Account} from '../../objects/account';
import {Salary} from '../../objects/salary';
import {Asset} from '../../objects/asset';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputDataService {

  accounts: Account[];
  salaries: Salary[];
  assets: Asset[];

  api = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getSalary(): Observable<any> {
    return this.http.get(this.api + 'salaries');
  }

  setSalary(salary: Salary) {
    return this.http.post<Salary>(this.api + 'salaries', salary);
  }

  getAccounts(): Observable<any> {
    return this.http.get(this.api + 'accounts');
  }

  setAccounts(accounts: Account[]) {
    return this.http.post<Account>(this.api + 'accounts', accounts[0]);
  }

}
