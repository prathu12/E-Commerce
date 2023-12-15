import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ApiService } from './api.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsService } from './userdetails.service';
import { LoginComponent } from './login/login.component';
import { OneproductdetailComponent } from './oneproductdetail/oneproductdetail.component';
import { ProductItemModule } from './product-item/product-item.module';
import { ProductApiService } from './product-item/product-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeBodyComponent,
    RegistrationComponent,
    LoginComponent,
    OneproductdetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ProductItemModule
  ],
  providers: [UserdetailsService, ProductApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
