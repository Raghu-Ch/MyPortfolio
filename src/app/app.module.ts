import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Materialize
import { MzSidenavModule } from 'ng2-materialize';
import { MzNavbarModule } from 'ng2-materialize';
import { MzCardModule } from 'ng2-materialize';
import { MzIconModule, MzIconMdiModule } from 'ng2-materialize';
import { MzButtonModule } from 'ng2-materialize';
import { MzModalModule } from 'ng2-materialize';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MzSidenavModule,
    MzNavbarModule,
    MzIconModule,
    MzCardModule,
    MzIconMdiModule,
    MzButtonModule,
    MzModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
