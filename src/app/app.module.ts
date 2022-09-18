import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MenuModule} from "./menu/menu.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CompanyService} from "./services/company.service";
import {InvoiceService} from "./services/invoice.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MenuModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [
    CompanyService,
    InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
