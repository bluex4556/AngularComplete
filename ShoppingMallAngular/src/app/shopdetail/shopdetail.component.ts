import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { windowWhen } from 'rxjs/operators';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
import { Shop } from '../models/Shop';
import { CartapiService } from '../services/cartapi.service';
import { ProductapiService } from '../services/productapi.service';
import { ShopapiService } from '../services/shopapi.service';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-shopdetail',
  templateUrl: './shopdetail.component.html',
  styleUrls: ['./shopdetail.component.css']
})
export class ShopdetailComponent implements OnInit,AfterViewInit {

  shopId:number;
  shop!:Shop;
  products:Product[] = [];
  cartProducts:Cart[] = [];
  constructor(private route:ActivatedRoute,shopApi:ShopapiService,productApi:ProductapiService,private viewPort:ViewportScroller,cartApi:CartapiService,dataShare:UserDataShareService) {
    this.shopId = route.snapshot.params["shopId"] as number;
    shopApi.getShopById(this.shopId).subscribe(s=>this.shop=s);
    productApi.getShopProducts(this.shopId).subscribe(prods=>{
      this.products = prods
    });
    dataShare.currentUserData.subscribe(user=>{
      if(!user.userName)
        return;
      cartApi.getCurrentUserCart(user.userName!).subscribe(carts=>{
        this.cartProducts = carts.filter(cart=>cart.product?.shopId==this.shopId)
      });
    });
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(e=>{
      if(e=="products")
        setTimeout(()=>this.viewPort.scrollToAnchor("bottom"),100);
    })
  }

  checkInCart(prod:Product):Cart|undefined{
    for (const cart of this.cartProducts) {
      if(cart.productId==prod.productId)
      {
        console.log("true",prod)
        return cart;
      }  
    }
    console.log("false",prod);
    return undefined;
  }
  ngOnInit(): void {
    
  }

}
