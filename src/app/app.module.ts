import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './Body/home-lg-card.component';
import { VerticalCardComponent } from './Body/Card/vertical-card.component';
import { TopNavBarComponent } from './Header/First NavBar/topnavbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './Body/Pages/Home/home-layout.component';
import { FooterComponent } from 'src/Footer/footer.component';
import { PlansComponent } from './Body/Pages/Plans/plans.component';
import { PhonesComponent } from './Body/Pages/Phones/phones.component';
import { CartComponent } from './Body/Pages/Deals/cart.component';
import { SupportComponent } from './Body/Pages/Support/support.component';
import { LoginComponent } from './Body/Pages/Login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardComponent,
    VerticalCardComponent,
    HomeLayoutComponent,
    FooterComponent,
    PlansComponent,
    PhonesComponent,
    CartComponent,
    SupportComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
