import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string = "http://localhost:25022/api/logins/";
  constructor(private http:HttpClient) { }

  getUser(id:string):Observable<User>{
    return this.http.get<User>(this.baseUrl+id);
  }

  postUser(data:User):Observable<any>{
    return this.http.post(this.baseUrl,data);
  }

  updateEmail(id:string,user:User){
    return this.http.put(this.baseUrl+id,user);
  }

  deleteAccount(id:string){
    return this.http.delete(this.baseUrl+id);
  }
}
