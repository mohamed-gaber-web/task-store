import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  addProductForm!: FormGroup;
  sub: Subscription[] = []

  constructor(private productService: ProductsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      title: [''],
      category: [''],
      price: [''],
      image: [''],
      description: [''],
    })
  }

  addProduct() {
    console.log(this.addProductForm.value);

    if (this.addProductForm.valid) {
      this.sub.push(
        this.productService.addProduct(this.addProductForm.value)
        .subscribe(response => {
          console.log(response);
          /**
           * output in console please check
           */
          })
      );
    }
    
  }

  ngOnDestroy(): void {
    this.sub.forEach(el => {
      el.unsubscribe();
    })
    
  }

}
