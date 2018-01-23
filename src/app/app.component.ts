import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App Works';

  ads: AdItem[];

  constructor(private adService: AdService, private toastService: MzToastService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  showToast() {
    this.toastService.show('Looking for Full Time Positions !', 5000, 'teal accent-4');
  }
}
