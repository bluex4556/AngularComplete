import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
import { CartapiService } from '../services/cartapi.service';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  @Input() product!:Product;
  @Input() cart?:Cart;
  username?:string;
  // inCart:boolean;

  constructor(private cartApi:CartapiService,private dataShare:UserDataShareService) { 
    this.dataShare.currentUserData.subscribe(user=>this.username=user.userName);
  }

  addToCart(){
    if(this.username==null){
      alert("You need to login")
    }
    else{
      let cart:Cart = {
        productId: this.product.productId!,
        qty: 1,
        userName: this.username,
      } 
      this.cartApi.addToCart(cart).subscribe(e=>this.cart=e);
      this.cart = cart;
    }
    // this.cartApi.addToCart({});
  }

  increaseQty(){
    ++this.cart!.qty;
    this.cartApi.updateQty(this.cart!).subscribe(e=>{});
  }
  
  decreaseQty(){
    --this.cart!.qty;
    if(this.cart!.qty==0)
    {
      this.cartApi.removeCart(this.cart!.cartId!).subscribe(e=>{
      this.cart = undefined;
      });
    }
    this.cartApi.updateQty(this.cart!).subscribe(e=>{});
  }

  ngOnInit(): void {
  }

}
