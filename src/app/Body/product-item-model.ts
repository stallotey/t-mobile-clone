export class ProductItemModel {
    img: string;
    price: number;
    model: string;
    brand: string;

    constructor(img: string, price: number, model: string, brand: string) {
        this.img = img;
        this.price = price;
        this.model = model;
        this.brand = brand;
    }
}