import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/core/Theatre.model';
import { MyBookingService } from 'src/app/shared/myBooking.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  constructor( public myBookingService: MyBookingService) { }

  ngOnInit(): void {
  }

  removeMyBooking(row: Booking){
    this.myBookingService.removeFromMyBooking(row.id);
  }

  
 /*  getDetails(){
    
  } */
}
