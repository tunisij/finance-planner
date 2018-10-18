import {Component, OnDestroy, OnInit} from '@angular/core';
import {InputDataService} from '../input-data.service';
import {Asset} from '../../objects/asset';

@Component({
  selector: 'app-asset-input',
  templateUrl: './asset-input.component.html',
  styleUrls: ['./asset-input.component.css']
})
export class AssetInputComponent implements OnInit, OnDestroy {

  assets: Asset[] = [];
  selectedIndex = 0;

  constructor(public inputDataService: InputDataService) { }

  ngOnInit() {
    if (this.inputDataService.assets !== undefined) {
      this.assets = this.inputDataService.assets;
    } else {
      this.addAsset();
    }
  }

  ngOnDestroy() {
    this.inputDataService.assets = this.assets;
  }

  addAsset() {
    this.assets.push(new Asset('Asset ' + (this.assets.length + 1), 0, new Date()));
    this.selectedIndex = this.assets.length - 1;
  }

}
