import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataShareService } from '../services/user-data-share.service';
import { Shop } from "../models/Shop";
import { ShopapiService } from '../services/shopapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopaddform',
  templateUrl: './shopaddform.component.html',
  styleUrls: ['./shopaddform.component.css']
})
export class ShopaddformComponent implements OnInit {

  addShopForm:FormGroup;
  urlRegex:string = "/(http(s)?:\/\/.)(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi";

  regex:RegExp = new RegExp(this.urlRegex);

  constructor(private dataShare:UserDataShareService,private shopApi:ShopapiService,private router:Router) { 
    this.addShopForm = new FormGroup({
      shopName : new FormControl("",Validators.required),
      image: new FormControl(""),
      description: new FormControl(""),
    });
  }

  onSubmit(data:any){
    console.log(data);
    this.dataShare.currentUserData.subscribe(user=>{
      let shop:Shop = {managerName:user.userName!,shopName:data.shopName,shopImageUrl:data.image,description:data.description}
      this.shopApi.addShop(shop).subscribe(success=>{
        alert("Shop Added");
        this.router.navigate(["home"]);
      },err=>console.log(err));
    });
  }

  ngOnInit(): void {
  }

}
