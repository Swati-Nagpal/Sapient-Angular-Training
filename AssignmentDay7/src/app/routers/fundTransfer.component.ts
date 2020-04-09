import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FUND_TRANSFER_OPTIONS } from '../mockdata/fundTransfer';

@Component({
    selector: 'app-fundTransfer',
    templateUrl: '../views/fundTransfer.component.html',
})
export class FundTransferComponent {

    options: any[];
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        this.options = FUND_TRANSFER_OPTIONS;
    }
}