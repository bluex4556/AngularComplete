import { Component, Input, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/Shop';
import { ShopapiService } from 'src/app/services/shopapi.service';
import { UserDataShareService } from 'src/app/services/user-data-share.service';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.css']
})
export class ManagerhomeComponent implements OnInit {

  shops?:Shop[];
  constructor(restapid:ShopapiService,dataShare:UserDataShareService) { 
    dataShare.currentUserData.subscribe(user=>{
      restapid.getShopFromManager(user?.userName!).subscribe(s=>{
        this.shops=s;
        console.log(this.shops);
      });
    });

  }

  ngOnInit(): void {
  }

}
