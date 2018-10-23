import { Injectable } from '@angular/core';
import {Account} from '../../objects/account';
import {Salary} from '../../objects/salary';
import {Asset} from '../../objects/asset';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InputDataService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  accounts: Account[];
  salaries: Salary[];
  assets: Asset[];

  api = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getSalaries(): Observable<any> {
    return this.http.get(this.api + 'salaries').pipe(map(response => response['_embedded'].salaries));
  }

  setSalaries(salaries: Salary[]) {
    return from(salaries).pipe(
      mergeMap(salary => <Observable<Salary>> this.http.post<Salary>(this.api + 'salaries', salary))
    );
  }

  deleteSalary(salary: Salary) {
    return this.http.delete(this.api + 'salaries/' + salary.id, this.httpOptions);
  }

  getAccounts(): Observable<any> {
    return this.http.get(this.api + 'accounts').pipe(map(response => response['_embedded'].accounts));
  }

  setAccounts(accounts: Account[]) {
    return from(accounts).pipe(
      mergeMap(account => <Observable<Account>> this.http.post<Account>(this.api + 'accounts', account))
    );
  }

  deleteAccount(account: Account) {
    return this.http.delete(this.api + 'accounts/' + account.id, this.httpOptions);
  }

  getAssets(): Observable<any> {
    return this.http.get(this.api + 'assets').pipe(map(response => response['_embedded'].assets));
  }

  setAssets(assets: Asset[]) {
    return from(assets).pipe(
      mergeMap(asset => <Observable<Asset>> this.http.post<Asset>(this.api + 'assets', asset))
    );
  }

  deleteAssets(asset: Asset) {
    return this.http.delete(this.api + 'assets/' + asset.id, this.httpOptions);
  }

}
