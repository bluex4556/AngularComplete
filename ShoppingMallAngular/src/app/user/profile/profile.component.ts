import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataShareService } from 'src/app/services/user-data-share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user?:User;
  constructor(private router:Router,private userApiSer:AuthService,private dataShare:UserDataShareService) { 
    dataShare.currentUserData.subscribe(user=>this.user=user);
  }

  deleteAccount(){
    if(confirm("Are you sure you want to delete your account?")){
      console.log("yes");
      this.userApiSer.deleteAccount(this.user?.userName!).subscribe(success=>{
        alert("Your account has been deleted");
        this.router.navigate(["\home"]);
        this.dataShare.changeData({});
      })
    }
    console.log("no");
  }
  ngOnInit(): void {
  }

}
