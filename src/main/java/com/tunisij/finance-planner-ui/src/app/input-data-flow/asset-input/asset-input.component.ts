import {Component, OnDestroy, OnInit} from '@angular/core';
import {InputDataService} from '../service/input-data.service';
import {Asset} from '../../objects/asset';

@Component({
  selector: 'app-asset-input',
  templateUrl: './asset-input.component.html',
  styleUrls: ['./asset-input.component.css']
})
export class AssetInputComponent implements OnInit, OnDestroy {

  assets: Asset[] = [];
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
    this.inputDataService.getAssets().subscribe(assets => {
      this.assets = assets.map(asset => new Asset(asset.name, asset.value, asset.id));

      if (this.assets.length === 0) {
        this.addAsset();
      }
      this.selectedIndex = this.assets.length - 1;
    });
  }

  ngOnDestroy() {
    this.inputDataService.assets = this.assets;
    this.inputDataService.setAssets(this.assets).subscribe();
  }

  onTabClick(index) {
    this.selectedIndex = index;
  }

  addAsset() {
    this.assets.push(new Asset('Asset ' + (this.assets.length + 1), 0));
    this.selectedIndex = this.assets.length - 1;
  }

  delete() {
    if (this.assets[this.selectedIndex].id === undefined) {
      this.assets.splice(this.selectedIndex, 1);
      this.selectedIndex--;
    } else {
      this.inputDataService.deleteAssets(this.assets[this.selectedIndex]).subscribe(() => {
        this.assets.splice(this.selectedIndex, 1);
        this.selectedIndex--;
      });
    }
  }
}
