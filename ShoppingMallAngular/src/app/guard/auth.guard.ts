import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataShareService } from '../services/user-data-share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataShare:UserDataShareService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return new Observable<boolean|UrlTree>(obs=>{
        this.dataShare.currentUserData.subscribe(user=>{
          if(user.userName==undefined){
            return this.router.parseUrl("/home");            
          }
          obs.next(true);
          return true;
        });
      }
    )
  }
  
}
