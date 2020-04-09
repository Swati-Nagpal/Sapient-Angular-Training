import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
        this.options = [
            "Electricity Bills",
            "Telephone and Mobile Bills",
            "Prepaid DTH/ Mobile Connection/ Data Card Recharge",
            "Gas Bills",
            "Mutual Funds.",
            "Insurance Premiums.",
            "Subscriptions.",
            "Contribution to Charities"
        ];
    }
}