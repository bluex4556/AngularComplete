import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!:User;
  constructor(private dataShare:UserDataShareService) { 
    dataShare.currentUserData.subscribe(e=>{this.user=e;});
  }

  ngOnInit(): void {
  }

}
