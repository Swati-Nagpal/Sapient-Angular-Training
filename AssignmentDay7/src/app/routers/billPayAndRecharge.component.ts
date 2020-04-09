import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BILL_PAYMENT_AND_RECHARGE_OPTIONS } from '../mockdata/billPayRecharge';

@Component({
    selector: 'app-billPayAndRecharge',
    templateUrl: '../views/billPayAndRecharge.component.html',
})
export class BillPayAndRechargeComponent {

    options: any[];
    title: string;

    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        this.title="With this new BillPay, you can now make online payments to over 260 billers across various categories including:";
        this.options = BILL_PAYMENT_AND_RECHARGE_OPTIONS;
    }
}