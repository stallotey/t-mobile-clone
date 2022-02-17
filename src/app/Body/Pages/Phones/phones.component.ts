import { Component } from "@angular/core";
import { mock_product_list } from "../../mock-product-list";
import { ProductItemModel } from "../../product-item-model";


@Component({
    selector: 'tm-phones',
    templateUrl: 'phones.component.html',
    styleUrls: ['phones.component.css']
    
})
export class PhonesComponent {
    products: ProductItemModel[] = [];
    constructor() {
        for (var product of mock_product_list) {
          console.log(product);
          this.products.push(product);
        }
      }

}