import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';

import { User } from "../models/User";
import { AuthService } from '../services/auth.service';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private signupService:AuthService,private router:Router,private dataShare:UserDataShareService) { 
    this.signupForm = new FormGroup({
      userName: new FormControl("",Validators.required),
      email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
      password: new FormControl("",Validators.required),
      confirmPassword: new FormControl("",Validators.required),
      role: new FormControl("C",Validators.required)
    });
  }

  onSubmit(data:any){
    console.log(data);
    if(data.password!=data.confirmPassword)
    {
      alert("Passwords dont match");
    }
    else{
      const md5 = new Md5()
      const passwordHash = md5.appendStr(data.password).end() as string;
      console.log(data);
      let user:User = {userName:data.userName,email:data.email,role:data.role,password:passwordHash}
      this.signupService.postUser(user).subscribe(e=>{
        alert("Signed Up");
        this.dataShare.changeData(user);
        this.router.navigate(["home"]);
      });
    }
  }

  ngOnInit(): void {
  }

}
