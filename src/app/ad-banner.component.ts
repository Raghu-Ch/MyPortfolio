import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div>
      <ng-template appAd></ng-template>
    </div>
  `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex = -1;
  @ViewChild(AdDirective) appAd: AdDirective;
  subscription: any;
  interval: any;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.cfr.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.appAd.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
