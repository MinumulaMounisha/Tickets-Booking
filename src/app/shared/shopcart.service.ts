import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${environment.baseURL}/product`);
  }
  addToShopCart(payload: any) {
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }
  getShopCartItems() {
    return this.http.get(`${environment.baseURL}/cart`);
  }
  increaseQty(payload: any) {
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }
  emptyShopCart() {
    return this.http.delete(`${environment.baseURL}/cart/empty-cart`);
  }
}

/* private cart: Cart[]=[];

insertCart(carrello:Cart){
   this.cart.push(carrello);
   console.log(this.cart);
}

elementInCart(){
    return this.cart.length;
}

getCarts(){
    return this.cart
}

removeFromCart(id: number){
    this.cart = this.cart.filter((riga)=> riga.id != id)
} 

totalCart(){
    return this.cart.reduce((totale,singolo)=> (totale += singolo.seats.price),0);
} */