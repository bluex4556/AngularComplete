import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { User } from '../models/User';
import { UserDataShareService } from '../services/user-data-share.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user!:User
  constructor(dataShare:UserDataShareService) {
    dataShare.currentUserData.subscribe(u=>this.user=u);
   }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_es1agns', 'template_vdn9e3t', e.target as HTMLFormElement, 'user_GexBIRTGJFxBBRW5gshyg')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Message Sent");
      }, (error) => {
        console.log(error.text);
      });
  }

}
