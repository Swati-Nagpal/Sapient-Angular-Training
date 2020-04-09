import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ACCOUNTS, AccountType } from '../mockdata/account';

@Component({
    selector: 'app-accounts',
    templateUrl: '../views/accounts.component.html',
})
export class AccountsComponent {
    accounts: AccountType[];

    // urlsec: any;
    // title: string;
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        this.accounts = ACCOUNTS;
        //url
        // this.routerState.url.subscribe(urlinfo => {
        //     urlinfo.forEach(urlseg => {
        //         console.log(urlseg.path);
        //         this.urlsec = urlseg
        //     });
        // });
        // //data 
        // this.routerState.data.subscribe(info => {
        //     console.log(info);
        //     this.title = info.title
        // }

        //)
    }
}