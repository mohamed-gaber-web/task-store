import { Injectable } from "@angular/core";
import { addProduct, getProductDetails, getProducts } from "src/api";

import { HttpClient } from "@angular/common/http";
import { IProduct } from "./products.model";


@Injectable({ providedIn: 'root' })

export class ProductsService {

    constructor(private http: HttpClient) { }
    
    getProductsList() {
        return this.http.get<IProduct[]>(`${getProducts}`);
    }

    getProductDetails(id: any) {
        return this.http.get(`${getProductDetails}/${id}`);
    }

    addProduct(product: IProduct) {
        return this.http.post(`${ addProduct }`, product)
    }
}