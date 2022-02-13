import { Component, Input } from "@angular/core";

@Component({
    selector: 'tm-topnavbar',
    templateUrl: 'topnavbar.component.html',
    styleUrls: ['topnavbar.component.css']
})
export class TopNavBarComponent {
    @Input()  img: string;
    price: number;
    sku: string;
    description: string;

    constructor() {
        this.img = "";
        this.price = 0.00;
        this.sku = "XXXXXX";
        this.description = "Missing description";
    }

}