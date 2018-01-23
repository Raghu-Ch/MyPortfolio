import { Injectable } from '@angular/core';

import { AboutAdComponent } from './about-ad/about-ad.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(AboutAdComponent, ['Your friendly COD fan boy']),
      new AdItem(AboutAdComponent, ['Passionate Learner']),
      new AdItem(AboutAdComponent, ['Positive Attitude']),
      new AdItem(AboutAdComponent, ['Self-motivated']),
      new AdItem(AboutAdComponent, ['Love to code']),
      new AdItem(AboutAdComponent, ['Video Game Freek']),
      new AdItem(AboutAdComponent, ['Xbox']),
      new AdItem(AboutAdComponent, ['Traveler'])
    ];
  }

}
