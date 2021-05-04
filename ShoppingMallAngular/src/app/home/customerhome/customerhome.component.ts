import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import { ShopapiService } from 'src/app/services/shopapi.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  shops:Shop[] =[]
  
  constructor(shopApi:ShopapiService) { 
    shopApi.getShops().subscribe(s=>{
      this.shops = s;
      console.log(this.shops);
    })
  }

  ngOnInit(): void {
  }

}
