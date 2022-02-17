import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from './Body/Pages/Plans/plans.component';
import { HomeLayoutComponent } from './Body/Pages/Home/home-layout.component';
import { PhonesComponent } from './Body/Pages/Phones/phones.component';
import { CartComponent } from './Body/Pages/Deals/cart.component';
import { SupportComponent } from './Body/Pages/Support/support.component';
import { LoginComponent } from './Body/Pages/Login/login.component';

const routes: Routes = [
  { path: 'Plans', component: PlansComponent },
  {path: 'Home', component:HomeLayoutComponent},
  {path: 'Phones', component:PhonesComponent},
  {path: 'Cart', component:CartComponent},
  {path: 'Support', component:SupportComponent},
  {path: 'Login',component:LoginComponent}
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
