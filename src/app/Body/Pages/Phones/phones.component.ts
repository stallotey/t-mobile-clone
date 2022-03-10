import { Component, OnInit } from "@angular/core";
import { mock_product_list } from "../../mock-product-list";
import { ProductItemModel } from "../../product-item-model";
import { ProductService } from "../../Service/product.service";


@Component({
  selector: 'tm-phones',
  templateUrl: 'phones.component.html',
  styleUrls: ['phones.component.css']

})
export class PhonesComponent implements OnInit {
  products: ProductItemModel[] = [];
  constructor(private service: ProductService) {
    // for (var product of mock_product_list) {
    //   console.log(product);
    //   this.products.push(product);
    // }
  }
  ngOnInit(): void {
    console.log("Fetch data");
    this.service.getProducts().subscribe(data => {
      console.log(data);
      for (var product of data) {
        this.products.push(product)
      }
    });
  }

}