import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from 'src/app/Body/product-item-model';
import { ProductService } from 'src/app/Body/Service/product.service';

@Component({
  selector: 'fm-add-product-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }

  addProduct(product:ProductItemModel){
    console.log("you clicked add product");
    console.log(product);
    this.ps.addProduct(product);
  }

}
