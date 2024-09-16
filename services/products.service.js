export class ProductsService { 

    constructor(data){
        this.products = data;
    }

    getProducts(){
        return this.products
    }
}

import products from "../data/products.json";

export const productsService = new ProductsService(products);
