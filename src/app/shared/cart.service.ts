import { Injectable } from "@angular/core";
import { Cart } from "../core/Theatre.model";

@Injectable({providedIn: 'root'})
export class CartService{

    private cart: Cart[]=[];

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
    }
    
}
