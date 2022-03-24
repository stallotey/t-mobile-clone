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
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddProductComponent } from './Body/Pages/Phones/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCM0IByHUC2Q9hJVdU8aZlaibze_UUtoaU",
  authDomain: "t-mobile-clone.firebaseapp.com",
  databaseURL: "https://t-mobile-clone-default-rtdb.firebaseio.com",
  projectId: "t-mobile-clone",
  storageBucket: "t-mobile-clone.appspot.com",
  messagingSenderId: "256221671200",
  appId: "1:256221671200:web:e2548a1988d12eaeacf145",
  measurementId: "G-Q3NWHG07SH"
};

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
    LoginComponent,
    UserInfoComponent,
    AddProductComponent,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
