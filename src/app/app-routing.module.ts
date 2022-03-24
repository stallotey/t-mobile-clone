import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './Body/Pages/Plans/plans.component';
import { HomeLayoutComponent } from './Body/Pages/Home/home-layout.component';
import { PhonesComponent } from './Body/Pages/Phones/phones.component';
import { CartComponent } from './Body/Pages/Deals/cart.component';
import { SupportComponent } from './Body/Pages/Support/support.component';
import { LoginComponent } from './Body/Pages/Login/login.component';
import { AddProductComponent } from './Body/Pages/Phones/add-product/add-product.component';

const routes: Routes = [
  { path: 'plans', component: PlansComponent },
  {path: 'home', component:HomeLayoutComponent},
  {path: 'phones', component:PhonesComponent},
  {path: 'cart', component:CartComponent},
  {path: 'support', component:SupportComponent},
  {path: 'login',component:LoginComponent},
  {path: 'admin',component:AddProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
