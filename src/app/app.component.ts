import { Component } from '@angular/core';
import { mock_product_list } from './Body/mock-product-list';
import { ProductItemModel } from './Body/product-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't-mobile-clone';
  products: ProductItemModel[] = [];

  constructor() {
    for (var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    }
  }
}
