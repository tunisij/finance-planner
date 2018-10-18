import {Component, OnDestroy, OnInit} from '@angular/core';
import {Account} from '../../objects/account';
import {InputDataService} from '../input-data.service';

@Component({
  selector: 'app-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.css']
})
export class AccountInputComponent implements OnInit, OnDestroy {

  accounts: Account[] = [];
  selectedIndex = 0;

  constructor(public inputDataService: InputDataService) { }

  ngOnInit() {
    if (this.inputDataService.accounts !== undefined) {
      this.accounts = this.inputDataService.accounts;
    } else {
      this.addAccount();
    }
  }

  ngOnDestroy() {
    this.inputDataService.accounts = this.accounts;
  }

  addAccount() {
    this.accounts.push(new Account('Account ' + (this.accounts.length + 1), 0, new Date()));
    this.selectedIndex = this.accounts.length - 1;
  }

}
