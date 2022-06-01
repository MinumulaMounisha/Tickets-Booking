import { Injectable } from "@angular/core";
import { Booking, Cart } from "../core/Theatre.model";

@Injectable({providedIn: 'root'})
export class MyBookingService{

    private Booking: Booking[]=[];

    insertMyBooking(carrello:Booking){
       this.Booking.push(carrello);
       console.log(this.Booking);
    }

   elementInMyBooking(){
        return this.Booking.length;
    }

   getMyBooking(){
        return this.Booking
    }

    removeFromMyBooking(id: number){
        this.Booking = this.Booking.filter((riga)=> riga.id != id)
    } 

    totalMyBooking(){
        return this.Booking.reduce((totale,singolo)=> (totale += singolo.seats.price),0);
    }
    
}
