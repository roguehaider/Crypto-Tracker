import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrl: './coin-list.component.scss',
})
export class CoinListComponent {
  bannerData: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
  }

  getBannerData() {
    this.api.getTrendingCurrency('PKR').subscribe((res) => {
      this.bannerData = res;
    });
  }

  getAllData() {
    this.api.getCurrency('PKR').subscribe((res) => {
      console.log(res);
    });
  }
}
