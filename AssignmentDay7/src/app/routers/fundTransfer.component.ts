import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-fundTransfer',
    templateUrl: '../views/fundTransfer.component.html',
})
export class FundTransferComponent {

    options: any[];
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        this.options = [
            { 
                title: "Transfer within the bank",
                details: "Re. 1 to Rs. 25 lakhs per day"
            },
            {
                title: "IMPS P2A - Instant Transfer",
                details: "Re. 1 to Rs. 25 lakhs per day"
            },
            {
                title: "Transfer to other bank(NEFT)",
                details: "Re. 1 to Rs. 25 lakhs per day"
            },
            {
                title: "Transfer to other bank(RTGS)",
                details: "Rs. 2 lakhs to Rs. 25 lakhs per day"
            },
            {
                title: "IMPS P2P - Instant Transfer",
                details: "-"   
            },
            {
                title: "Transfer to eCMS account",
                details: "Re. 1 to Rs. 10 lakhs per day"
            },
            {
                title: "Foreign outward remittance",
                details: "Upto 12,500 USD equivalent per year"
            },
            {
                title: "Cardless cash withdrawal",
                details: ""
            }
        ];
    }
}