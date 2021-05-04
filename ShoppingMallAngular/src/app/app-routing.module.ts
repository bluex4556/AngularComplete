import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth.guard';
import { ManagerGuard } from './guard/manager.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './manageshop/addproduct/addproduct.component';
import { EditproductComponent } from './manageshop/editproduct/editproduct.component';
import { ManageshopComponent } from './manageshop/manageshop.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopaddformComponent } from './shopaddform/shopaddform.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UpdateemailComponent } from './user/profile/updateemail/updateemail.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"profile",component:ProfileComponent, canActivate:[AuthGuard]},
  {path:"profile/updateemail",component:UpdateemailComponent,canActivate:[AuthGuard]},
  {path:"addshop",component:ShopaddformComponent, canActivate:[ManagerGuard]},
  {path:"shop/:shopId",component:ShopdetailComponent},
  {path:"manage/:shopId",component:ManageshopComponent,canActivate:[ManagerGuard]},
  {path:"manage/:shopId/addproduct",component:AddproductComponent,canActivate:[ManagerGuard]},
  {path:"edit/product/:productId", component:EditproductComponent,canActivate:[ManagerGuard]},
  {path:"cart",component:CartComponent, canActivate:[AuthGuard]},
  {path:"contact",component:ContactComponent},
  {path:"orders",component:OrdersComponent,canActivate:[AuthGuard]},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled'})],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
