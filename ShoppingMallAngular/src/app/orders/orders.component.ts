import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Orders';
import { OrderapiService } from '../services/orderapi.service';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[] = [];
  constructor(dataShare:UserDataShareService,orderApi:OrderapiService) { 
    dataShare.currentUserData.subscribe(user=>{
      orderApi.getOrdersByUser(user.userName!).subscribe(ord=>this.orders = ord);
    })
  }

  ngOnInit(): void {
  }

}
