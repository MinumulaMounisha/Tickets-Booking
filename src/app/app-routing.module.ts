import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/login.guard';
import { BookingsComponent } from './features/bookings/bookings.component';

import { CartComponent } from './features/cart/cart.component';
import { HOMEComponent } from './features/home/home.component';

import { LoginComponent } from './features/login/login.component';
import { MyBookingsComponent } from './features/my-bookings/my-bookings.component';
import { PaymentComponent } from './features/payment/payment.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  {
    path: 'Home',component: HOMEComponent  
  },
  {
    path: 'search',component: SearchComponent , canActivate:[LoginGuard]
  },
  {
    path: 'cart',component: CartComponent , canActivate:[LoginGuard]
  
  },
 /*  {
    path: 'shop-cart',component: CartComponent
  
  }, */
  {
    path: 'login',component: LoginComponent
  
  },
  {
    path: 'Bookings',component: BookingsComponent , canActivate:[LoginGuard]
  
  },
  {
    path: 'Payment',component: PaymentComponent , canActivate:[LoginGuard]
  
  },
  {
    path: 'MyBookings',component: MyBookingsComponent , canActivate:[LoginGuard]
  
  },
  {
    path: '**',
    redirectTo: 'Home'
    //component: SearchComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
