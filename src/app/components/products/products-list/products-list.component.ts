import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  sub: Subscription[] = [];
  products!: any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.sub.push(
      this.productService.getProductsList()
      .subscribe(response => {
        this.products = response
      })
    )
  };

  ngOnDestroy(): void {

    this.sub.forEach(el => {
      el.unsubscribe()
    })
    
  }

}
