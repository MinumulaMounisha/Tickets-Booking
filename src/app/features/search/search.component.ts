import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Seat, Theater } from 'src/app/core/Theatre.model';
import { CartService } from 'src/app/shared/cart.service';
import { MyBookingService } from 'src/app/shared/myBooking.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // [x: string]: any;

  theaters: Theater[] = [];
  movieSearched: string = 'pushpa';
  theaterSelected: any = " ";
  imgMain: string = '';

  constructor(
    private httpClient: HttpClient,
    private cartService: CartService,
    private myBookingService: MyBookingService
  ) { }

  ngOnInit(): void {
    //this.loadHotels();
    this.searchTheater(this.movieSearched);
  }

  loadTheaters() {
    const url = environment.baseURL + '/theaters';
    this.httpClient.get<Theater[]>(url).subscribe(data => {
      this.theaters = data;
      console.log(this.theaters);
    });
  }

  searchTheater(movie: string) {
    this.movieSearched = movie;

    const url = environment.baseURL + '/theaters?q=' + movie;
    this.httpClient.get<Theater[]>(url).subscribe(data => {
      this.theaters = data;
      //console.log(this.hotels);
      //this.selTheater(this.hotels[0]);
    });
  }

  selTheater(theater: Theater) {
    //console.log(theater.rate);
    this.theaterSelected = theater;
   // this.imgMain = this.theaterSelected.images[0];
  }

  changeImg(img: string) {
    this.imgMain = img;
  }

  /* sendMail(fc: NgForm) {
    const allert: string = "Mittente:" + fc.value.mail + "\n" + "Messaggio:" + fc.value.message + "\n" + "Destinario:" + this.hotelSelected.email;
    alert(allert);
  } */

  addToCart(seat: Seat) {
    // here has the clicked room to add to cart

    console.log(seat);

    const Camera = { id: this.cartService.elementInCart() ? this.cartService.elementInCart() + 1 : 1, theater: this.theaterSelected, seats: seat }

    console.log(Camera);
    this.cartService.insertCart(Camera);

  } 

 



}
