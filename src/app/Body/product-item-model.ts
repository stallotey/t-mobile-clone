export class ProductItemModel {
    img: string;
    price: number;
    model: string;
    description: string;

    constructor(img: string, price: number, model: string, description: string) {
        this.img = img;
        this.price = price;
        this.model = model;
        this.description = description;
    }
}