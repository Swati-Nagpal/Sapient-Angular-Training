import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ACCOUNTS, AccountType } from '../mockdata/account';

@Component({
    selector: 'app-accounts',
    templateUrl: '../views/accounts.component.html',
})
export class AccountsComponent {
    accounts: AccountType[];
    
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        this.accounts = ACCOUNTS;
    }
}