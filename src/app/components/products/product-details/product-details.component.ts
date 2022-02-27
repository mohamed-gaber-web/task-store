import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../products.service';

import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  courseDetails: any;
  sub: Subscription[] = []

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub.push(
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.productService.getProductDetails(params.get('productId')))
        ).subscribe(response => {
          console.log(response);
          this.courseDetails = response;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.forEach(el => {
      el.unsubscribe();
    })
    
  }


}
