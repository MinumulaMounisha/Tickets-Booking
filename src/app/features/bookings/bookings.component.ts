import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Theater } from 'src/app/core/Theatre.model';
import { MyBookingService } from 'src/app/shared/myBooking.service';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent {

  theaters: Theater[] = [];
  theaterSelected: any = " ";

  public show: boolean = false;
  public buttonName: any = 'Show'; 
  public myForm: FormGroup;
  
  constructor(private myBookingService: MyBookingService, 
    private formBuilder: FormBuilder,
    private router: Router) { 
    this.myForm = formBuilder.group({
      mob: ['', [Validators.required, Validators.pattern("^((\\+39-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required,  Validators.minLength(6), Validators.maxLength(20)]],
      date: ['',Validators.required]
    })
  }

  get m(){
    return this.myForm.controls;
  }
   
  onSubmit(){
    console.log(this.myForm.value);
  }

  ngOnInit() {
   // this.getFilters();
  }

  booking(f:NgForm){
    console.log(f.value);
  }

 /*  addToMyBooking(seat: Seat) {
    // here has the clicked room to add to cart

    console.log(seat);

    const Camera = { id: this.myBookingService.elementInMyBooking() ? this.myBookingService.elementInMyBooking() + 1 : 1, theater: this.theaterSelected, seats: seat }

    console.log(Camera);
    this.myBookingService.insertMyBooking(Camera);

  }  */

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
 }
 
 btnClick() {
  this.router.navigateByUrl('MyBookings');
 }

}
