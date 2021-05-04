import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/Shop';

@Injectable({
  providedIn: 'root'
})
export class ShopapiService {

  baseUrl:string = "http://localhost:25022/api/shops/";
  constructor(private http:HttpClient) { }


  getShopById(id:number):Observable<Shop>{
    return this.http.get<Shop>(this.baseUrl+id);
  }
  
  getShopFromManager(id:string):Observable<Shop[]>{
    return this.http.get<Shop[]>(this.baseUrl+"manager/"+id);
  }

  addShop(data:Shop):Observable<any>{
    return this.http.post(this.baseUrl,data);
  }

  getShops():Observable<Shop[]>{
    return this.http.get<Shop[]>(this.baseUrl);
  }
}
