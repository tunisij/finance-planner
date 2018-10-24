import { Component, OnInit } from '@angular/core';
import {InputDataService} from '../../input-data-flow/service/input-data.service';
import {Account} from '../../objects/account';
import {Asset} from '../../objects/asset';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-net-worth-breakdown',
  templateUrl: './net-worth-breakdown.component.html',
  styleUrls: ['./net-worth-breakdown.component.css']
})
export class NetWorthBreakdownComponent implements OnInit {

  accounts: Account[];
  assets: Asset[];
  netWorthData: any;
  labels: string[] = [];
  data: any[] = [];
  colors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#8DFF8C',
    '#D983FF',
    '#FF6130',
    '#A9F0FF',
    '#FFBCCB',
    '#FEFF39',
    '#4FFF2C',
    '#2E27FF'];

  constructor(public inputDataService: InputDataService) {
  }

  ngOnInit() {
    forkJoin(this.inputDataService.getAccounts(), this.inputDataService.getAssets()).subscribe(dataList => {
      dataList.forEach(data => {
        data.forEach(typedData => {
          this.labels.push(typedData.name);
          this.data.push(typedData.balance === undefined ? typedData.value : typedData.balance);
        });
      });

      this.netWorthData = {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors
          }]
      };
    });
  }

}
