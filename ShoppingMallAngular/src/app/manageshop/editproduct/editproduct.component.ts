import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product?:Product;
  editForm!:FormGroup;
  constructor(private productApi:ProductapiService,route:ActivatedRoute,private router:Router) { 
    this.productApi.getProductById(route.snapshot.params["productId"]).subscribe(p=>{
      console.log(p);
      this.editForm = new FormGroup({
        productName:new FormControl(p.productName,Validators.required),
        price: new FormControl(p.price,Validators.compose([Validators.required,Validators.min(1)])),
        stock: new FormControl(p.stock,Validators.compose([Validators.required,Validators.min(1)])),
        image: new FormControl(p.productImageUrl),
        description: new FormControl(p.description),
      });
      this.product = p;
    });
  }

  onSubmit(data:any){
    let prod:Product =
    {
      productId: this.product?.productId,
      price:data.price,
      productName:data.productName,
      stock:data.stock,
      productImageUrl:data.image,
      description:data.description,
    };

    this.productApi.editProduct(prod.productId!,prod).subscribe(e=>{
      alert("Edited Product ");
      this.router.navigate(["/manage",this.product?.shopId]);
    })
  }

  deleteProduct(){
    if(confirm("Are you sure you want to delete this product?")){
      this.productApi.deleteProduct(this.product?.productId!).subscribe(s=>{
        this.router.navigate(["/manage",this.product?.shopId]);
      })
    }
    else{

    }
  }

  ngOnInit(): void {
  }

}
