import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  baseUrl:string = "http://localhost:25022/api/Products/";
  constructor(private http:HttpClient) { }

  addProduct(prod:Product):Observable<any>{
    return this.http.post(this.baseUrl,prod);
  }

  getShopProducts(shopId:number):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+"shop/"+shopId);
  }

  searchProducts(search:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+"search/"+search);
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+id);
  }

  editProduct(id:number,product:Product):Observable<any>{
    return this.http.put(this.baseUrl+id,product);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+id);
  }
  
}
