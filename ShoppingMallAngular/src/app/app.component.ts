import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './models/User';
import { ProductapiService } from './services/productapi.service';
import { UserDataShareService } from './services/user-data-share.service';
import {debounceTime,tap,switchMap,filter, map, startWith, distinctUntilChanged} from 'rxjs/operators';
import { Product } from './models/Product';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ShoppingMall';
  user?:User;
  searchProducts:Product[] = [];
  searchForm: FormGroup

  constructor(private dataShare:UserDataShareService,private router:Router,private search:ProductapiService){
    dataShare.currentUserData.subscribe(u=>{
      this.user = u;
    });
    this.searchForm = new FormGroup({
      search : new FormControl("",Validators.required),
    })
  }

  onChangeSearch(search:string){
    this.search.searchProducts(search).subscribe(data=>this.searchProducts=data);
  }

  goToProduct(product:Product){
    console.log(product);
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(["/shop",product?.shopId],{fragment: 'products'})
  }
  logout(){
    this.router.navigate(["home"]);
    this.user= undefined;
    this.dataShare.changeData({});
  }
}
