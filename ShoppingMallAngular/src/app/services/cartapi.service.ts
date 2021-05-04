import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  baseUrl:string = "http://localhost:25022/api/Carts/";
  
  constructor(private http:HttpClient) { }

  getCurrentUserCart(username:string):Observable<Cart[]>{
    return this.http.get<Cart[]>(this.baseUrl+"current/"+username);
  }

  addToCart(cart:Cart):Observable<any>{
    return this.http.post(this.baseUrl,cart);
  }

  updateQty(cart:Cart){
    return this.http.put(this.baseUrl+cart.cartId,cart);
  }

  removeCart(id:number){
    return this.http.delete(this.baseUrl+id);
  }
}
