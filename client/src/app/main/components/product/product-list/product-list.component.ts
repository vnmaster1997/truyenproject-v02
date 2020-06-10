import { ProductService } from './../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../../../../shared/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	productList: Product[] = []

  constructor( private productService : ProductService) { }

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.productService.getListProducts().subscribe((products: any) => {
      this.productList = products;
      console.log(products);
    }, (err) => {
      console.log(err)
    })
  }

}
