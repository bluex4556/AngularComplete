import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { AuthService } from '../services/auth.service';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {


  user:any;
  loginForm:FormGroup;
  constructor(private loginSer:AuthService, private router:Router,private dataShare:UserDataShareService) { 
    this.loginForm = new FormGroup({
      userName: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    const md5 = new Md5();
    const passwordHash = md5.appendStr(data.password).end() as string;
    this.loginSer.getUser(data.userName).subscribe(e=>{  
      if(e.password == passwordHash){
        alert("Logged in");
        console.log(e);
        this.dataShare.changeData({userName:e.userName,email:e.email,role:e.role});
        this.router.navigate(["home"]);
      }
      else{
        alert("Incorrect Password");
      }
    },error=>{
      if(error.statusCode == 404){
        alert("Username not found");
      }
    });
  }
} 
