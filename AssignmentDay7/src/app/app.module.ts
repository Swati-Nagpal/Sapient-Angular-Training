import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './routers/accounts.component';
import { BillPayAndRechargeComponent } from './routers/billPayAndRecharge.component';
import { FundTransferComponent } from './routers/fundTransfer.component';
import { OffersComponent } from './routers/offers.component.';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    BillPayAndRechargeComponent,
    FundTransferComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
