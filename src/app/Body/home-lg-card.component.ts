import { Component, Input } from "@angular/core";

@Component({
    selector: 'tm-large-cards',
    templateUrl: 'home-lg-card.component.html',
    styleUrls: ['home-lg-card.component.css']
})
export class CardComponent {
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