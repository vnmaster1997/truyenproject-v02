import { Injectable } from '@angular/core';
import { Product } from '../main/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsUrl } from '../main/config/api';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts() {
  	return this.http.get(`${environment.apiBaseUrl}/product/listproducts`);
  }
}
