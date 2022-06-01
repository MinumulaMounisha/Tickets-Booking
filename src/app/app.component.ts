import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './shared/cart.service';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieTickets-Booking';
  elements: number = 0;


  constructor(
    public cartService: CartService,
    public loginService: LoginService,
    private router: Router
  ){ 
    this.elements=cartService.elementInCart();
  }
  ngOnInit(): void {
    this.loginService.tokenPresent();
  }

doLogin(){
  if(this.loginService.datiLogin().name){
    //alert("ciao");
    this.loginService.logout();
  }
  else{
    this.router.navigateByUrl("login");
  }
}


}
