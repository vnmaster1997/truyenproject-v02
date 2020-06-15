import { Injectable } from '@angular/core';
import { Product } from '../main/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts() {
  	return this.http.get(`${environment.apiBaseUrl}/products`);
  }

  getProductById() {
  	return this.http.get(`${environment.apiBaseUrl}/products/:id`);
  }
}
  