import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataShareService } from 'src/app/services/user-data-share.service';

@Component({
  selector: 'app-updateemail',
  templateUrl: './updateemail.component.html',
  styleUrls: ['./updateemail.component.css']
})
export class UpdateemailComponent implements OnInit {

  updateEmailForm:FormGroup;
  constructor(private dataShare:UserDataShareService,private userApiSer:AuthService,private router:Router) { 
    this.updateEmailForm = new FormGroup({
      email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
    });
  }

  onSubmit(data:any){
    this.dataShare.currentUserData.subscribe(user=>{
      user.email = data.email;
      this.userApiSer.updateEmail(user.userName!,user).subscribe(success=>{
        alert("Email Updated");
        this.router.navigate(["home"]);
      },err=>console.log(err));
    })
  }

  ngOnInit(): void {
    
  }

}
