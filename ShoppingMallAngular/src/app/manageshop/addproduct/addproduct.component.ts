import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  shopId:number;
  addProductForm:FormGroup
  constructor(route:ActivatedRoute,private productApi:ProductapiService,private router:Router) { 
    this.shopId = route.snapshot.params["shopId"];
    this.addProductForm = new FormGroup({
      productName:new FormControl("",Validators.required),
      price: new FormControl(0,Validators.compose([Validators.required,Validators.min(1)])),
      stock: new FormControl(0,Validators.compose([Validators.required,Validators.min(1)])),
      image: new FormControl(),
      description: new FormControl(),
    });
  }

  onSubmit(data:any){
    let prod:Product =
    {
      price:data.price,
      productName:data.productName,
      stock:data.stock,
      productImageUrl:data.image,
      description:data.description,
      shopId: this.shopId,
    };
    this.productApi.addProduct(prod).subscribe(e=>{
      alert("Product Added");
      this.router.navigate(["/manage",this.shopId]);
    })

  }
  ngOnInit(): void {
  }

}
