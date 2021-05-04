import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  baseUrl:string= "http://localhost:25022/api/Orders/";
  constructor(private http:HttpClient) { }

  postOrder(order:Order):Observable<Order>{
    return this.http.post<Order>(this.baseUrl,order);
  }

  getOrdersByUser(userName:string):Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl+userName);
  }

}
