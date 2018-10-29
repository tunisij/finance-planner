import { Component, OnInit } from '@angular/core';
import {InputDataService} from '../../input-data-flow/service/input-data.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-net-worth-breakdown',
  templateUrl: './net-worth-breakdown.component.html',
  styleUrls: ['./net-worth-breakdown.component.css']
})
export class NetWorthBreakdownComponent implements OnInit {

  netWorthData: any;
  data: {label: string, value: any}[] = [];
  total: number;

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
          this.data.push({label: typedData.name, value: typedData.balance === undefined ? typedData.value : typedData.balance});
        });
      });

      this.netWorthData = {
        labels: this.data.map(item => item.label),
        datasets: [
          {
            data: this.data.map(item => item.value),
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors
          }]
      };

      this.total = this.data.reduce((total, item) => total + Number(item.value), 0);
    });
  }

}
