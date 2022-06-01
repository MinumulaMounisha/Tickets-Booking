import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { LoginComponent } from './features/login/login.component';
import { CartComponent } from './features/cart/cart.component';
import { SearchTheaterComponent } from './features/search/components/search-theater.component';
import { SearchTheaterlistComponent } from './features/search/components/search-theaterlist.component';
import { CardComponent } from './shared/components/card.component';
import { SearchMapComponent } from './features/search/components/search-map.component';
import { SearchStarsComponent } from './features/search/components/search-stars.component';
import { SearchSeatsComponent } from './features/search/components/search-seats.component';
import { SearchImagesComponent } from './features/search/components/search-images.component';
import { SearchServicesComponent } from './features/search/components/search-services.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { MyBookingsComponent } from './features/my-bookings/my-bookings.component';
import { HOMEComponent } from './features/home/home.component';
import { PaymentComponent } from './features/payment/payment.component';
import { SearchContactComponent } from './features/search/components/search-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    CartComponent,
    SearchTheaterComponent,
    SearchTheaterlistComponent,
    CardComponent,
    SearchMapComponent,
    SearchStarsComponent,
    SearchSeatsComponent,
    SearchImagesComponent,
    SearchServicesComponent,
    SearchContactComponent,
    BookingsComponent,
    MyBookingsComponent,
    HOMEComponent,
    PaymentComponent,
  
  
   

 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
