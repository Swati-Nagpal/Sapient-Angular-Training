import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-offers',
    templateUrl: '../views/offers.component.html',
})
export class OffersComponent {

    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
    }
}