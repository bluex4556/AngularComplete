import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataShareService } from '../services/user-data-share.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor(private dataShare:UserDataShareService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Observable<boolean|UrlTree>(obs=>{
        this.dataShare.currentUserData.subscribe(user=>{
          if(user.userName==undefined || user.role!="M"){
            return this.router.navigate(["login"]);            
          }
          obs.next(true);
          return true;
        });
      }
    )
  }
  
}
