import {Component, OnDestroy, OnInit} from '@angular/core';
import {Account} from '../../objects/account';
import {InputDataService} from '../service/input-data.service';

@Component({
  selector: 'app-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.css']
})
export class AccountInputComponent implements OnInit, OnDestroy {

  accounts: Account[] = [];
  _selectedIndex = 0;

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index: number) {
    this._selectedIndex = index < 0 ? 0 : index;
  }

  constructor(public inputDataService: InputDataService) {
  }

  ngOnInit() {
    this.inputDataService.getAccounts().subscribe(accounts => {
      this.accounts = accounts.map(account => new Account(account.name, account.balance, account.date, account.id));

      if (this.accounts.length === 0) {
        this.addAccount();
      }
      this.selectedIndex = this.accounts.length - 1;
    });
  }

  ngOnDestroy() {
    this.inputDataService.accounts = this.accounts;
    this.inputDataService.setAccounts(this.accounts).subscribe();
  }

  onTabClick(index) {
    this.selectedIndex = index;
  }

  addAccount() {
    this.accounts.push(new Account('Account ' + (this.accounts.length + 1), 0, new Date()));
    this.selectedIndex = this.accounts.length - 1;
  }

  delete() {
    if (this.accounts[this.selectedIndex].id === undefined) {
      this.accounts.splice(this.selectedIndex, 1);
      this.selectedIndex--;
    } else {
      this.inputDataService.deleteAccount(this.accounts[this.selectedIndex]).subscribe(() => {
        this.accounts.splice(this.selectedIndex, 1);
        this.selectedIndex--;
      });
    }
  }
}
