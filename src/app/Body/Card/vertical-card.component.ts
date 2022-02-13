import { Component, Input } from "@angular/core";
@Component ({
    selector: 'tm-vertical-card',
    templateUrl: 'vertical-card.component.html',
    styleUrls: ['vertical-card.component.css']
})
export class VerticalCardComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() brand: string;
    @Input() model: string;

    constructor(){
        this.img="";
        this.price= 0.00;
        this.brand= "XXXXX";
        this.model= "XXX";
    }
}