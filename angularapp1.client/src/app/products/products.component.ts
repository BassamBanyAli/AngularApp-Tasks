import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  ngOnInit() {

    this.getAllProducts()
  }

  constructor(private _ser : ProductService) { }
  array :any
  getAllProducts() {
    this._ser.getAllProducts().subscribe((data) => {
      this.array = data
})
  }
}
