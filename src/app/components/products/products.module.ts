import { NgModule } from "@angular/core";


import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsComponent } from "./products.component";
import { AddProductsComponent } from "./add-products/add-products.component";

import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'product/:productId', component: ProductDetailsComponent },
    { path: 'addProduct', component: AddProductsComponent }
]

@NgModule({
    declarations: [AddProductsComponent, ProductDetailsComponent, ProductsComponent, ProductsListComponent],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule]
})
export class ProductsModule { }