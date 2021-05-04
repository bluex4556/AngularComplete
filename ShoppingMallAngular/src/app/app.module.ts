import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './user/profile/profile.component';
import { CustomerhomeComponent } from './home/customerhome/customerhome.component';
import { ManagerhomeComponent } from './home/managerhome/managerhome.component';
import { UpdateemailComponent } from './user/profile/updateemail/updateemail.component';
import { ShopaddformComponent } from './shopaddform/shopaddform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopcardComponent } from './shopcard/shopcard.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';
import { ManageshopComponent } from './manageshop/manageshop.component';
import { AddproductComponent } from './manageshop/addproduct/addproduct.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { EditproductComponent } from './manageshop/editproduct/editproduct.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    CustomerhomeComponent,
    ManagerhomeComponent,
    UpdateemailComponent,
    ShopaddformComponent,
    PagenotfoundComponent,
    ShopcardComponent,
    ShopdetailComponent,
    ManageshopComponent,
    AddproductComponent,
    EditproductComponent,
    ProductcardComponent,
    CartComponent,
    ContactComponent,
    AboutComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
