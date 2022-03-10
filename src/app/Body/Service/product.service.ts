import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "../product-item-model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private baseUrl: string = 'https://t-mobile-clone-default-rtdb.firebaseio.com/'
    private productsEndPoint: string = 'products.json';

    constructor(private http: HttpClient) {

    }
    public getProducts() {
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndPoint);
    }

    public getProduct(index:number ){
        return this.http.get<ProductItemModel>(this.baseUrl +  'products/' + index + '.json')
    }
}