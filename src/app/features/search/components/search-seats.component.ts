import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Seat, Theater } from 'src/app/core/Theatre.model';

@Component({
  selector: 'app-search-seats',
  template: `
  <div *ngFor="let seat of theaterSelected.seats" class="horiz-grid separator">
    <div>{{seat.label}}</div>
      <div>
          {{ seat.price | currency: 'EUR'}}
        <i (click)="addToCart.emit(seat)" class="ion-ios-cart"></i>
      </div>
  </div>
  `,
  styles: [
  ]
})

export class SearchSeatsComponent {

  @Input() theaterSelected: Partial<Theater> ={};
  @Output() addToCart: EventEmitter<Seat> = new EventEmitter<Seat>();
}
