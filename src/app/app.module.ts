import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutAdComponent } from './about-ad/about-ad.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner.component';
import { AdService } from './ad.service';

// Materialize
import { MzSidenavModule } from 'ng2-materialize';
import { MzNavbarModule } from 'ng2-materialize';
import { MzCardModule } from 'ng2-materialize';
import { MzIconModule, MzIconMdiModule } from 'ng2-materialize';
import { MzButtonModule } from 'ng2-materialize';
import { MzModalModule } from 'ng2-materialize';
import { MzToastModule } from 'ng2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    AboutAdComponent,
    AdDirective,
    AdBannerComponent
  ],
  imports: [
    BrowserModule,
    MzSidenavModule,
    MzNavbarModule,
    MzIconModule,
    MzCardModule,
    MzIconMdiModule,
    MzButtonModule,
    MzModalModule,
    MzToastModule
  ],
  entryComponents: [AboutAdComponent],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
