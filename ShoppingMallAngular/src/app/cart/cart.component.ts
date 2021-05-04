import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { Order } from '../models/Orders';
import { CartapiService } from '../services/cartapi.service';
import { OrderapiService } from '../services/orderapi.service';
import { ProductapiService } from '../services/productapi.service';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:Cart[] = [];
  username?:string;
  constructor(private cartApi:CartapiService,private dataShare:UserDataShareService,productApi:ProductapiService,private orderApi:OrderapiService,private router:Router) { 
    dataShare.currentUserData.subscribe(user=>{
      this.username = user.userName;
      cartApi.getCurrentUserCart(user.userName!).subscribe(carts=>{
        this.carts=carts;
      })
    })
  }

  decreaseQty(cart:Cart){
    --cart.qty;
    if(cart.qty==0)
    {
      this.cartApi.removeCart(cart.cartId!).subscribe(e=>{
        this.carts=this.carts?.filter(c=>c.cartId!=cart.cartId)
      });
    }
    this.cartApi.updateQty(cart).subscribe(e=>{});
  }

  increaseQty(cart:Cart){
    ++cart.qty;
    this.cartApi.updateQty(cart).subscribe(e=>{});
  }


  order(){
    let totalSum=0;
    for (const cart of this.carts) {
      totalSum += cart.qty * cart.product!.price;
    }
    let order:Order = {userName:this.username!,finalAmount:totalSum};
    this.orderApi.postOrder(order).subscribe(ord=>{
      alert("Order Placed");
      this.router.navigate(["\home"]);
    })
  }
  
  ngOnInit(): void {
  }

}
