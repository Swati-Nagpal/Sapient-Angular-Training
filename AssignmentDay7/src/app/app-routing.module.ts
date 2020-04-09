import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './routers/accounts.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FundTransferComponent } from './routers/fundTransfer.component';
import { BillPayAndRechargeComponent } from './routers/billPayAndRecharge.component';
import { OffersComponent } from './routers/offers.component.';


const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'fundtransfer', component: FundTransferComponent },
  { path: 'billpayandrecharge', component: BillPayAndRechargeComponent },
  { path: 'offers', component: OffersComponent },
  { path: '', redirectTo: '/accounts', pathMatch: 'full'},
  { path: '**', redirectTo: '/accounts', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
