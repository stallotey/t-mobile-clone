import { Component, Input } from "@angular/core";

@Component({
    selector: 'tm-contentbody',
    templateUrl: 'body.component.html',
    styleUrls: ['body.component.css']
})
export class BodyComponent {
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