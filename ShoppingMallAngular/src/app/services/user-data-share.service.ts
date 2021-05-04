import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataShareService {

  private userData = new BehaviorSubject<User>({});
  currentUserData= this.userData.asObservable();
  constructor() { }

  changeData(user:User){
    console.log(user);
    this.userData.next(user);
  }
}
