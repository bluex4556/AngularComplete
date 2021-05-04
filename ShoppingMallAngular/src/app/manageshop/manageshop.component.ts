import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/Product';
import { Shop } from '../models/Shop';
import { ProductapiService } from '../services/productapi.service';
import { ShopapiService } from '../services/shopapi.service';

@Component({
  selector: 'app-manageshop',
  templateUrl: './manageshop.component.html',
  styleUrls: ['./manageshop.component.css']
})
export class ManageshopComponent implements OnInit {

  shopId:number;
  shop!:Shop;
  products:Product[] = []

  constructor(route:ActivatedRoute,shopApi:ShopapiService, productApi:ProductapiService,private router:Router) {
    this.shopId = route.snapshot.params["shopId"];
    shopApi.getShopById(this.shopId).subscribe(s=>this.shop=s);
    productApi.getShopProducts(this.shopId).subscribe(prods=>this.products = prods);
  }

  editProduct(product:Product){
    ;
  }
  ngOnInit(): void {
  }

}
