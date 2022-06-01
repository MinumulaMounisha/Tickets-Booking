import { Component, Input, OnInit } from '@angular/core';
import { Theater } from 'src/app/core/Theatre.model';

@Component({
  selector: 'app-search-map',
  template: `
  <div>
      <img src="https://maps.googleapis.com/maps/api/staticmap?center={{theaterSelected.location?.address}}&zoom=15&size=700x200&key=AIzaSyDXel_VFhpJnqyeA5UKVHkuYef5T6MXZik"
       width="100%" height="200">
  </div>
  <div class="rate">
      <div class="address">
        <div class="font-big">{{theaterSelected.name}}</div>
        <div class="font-small">{{theaterSelected.location?.address}}</div> 
      </div>
      <div class="stars">
             <i  *ngFor="let star of [1,2,3,4,5]; let i = index"
              class="icon "
              [ngClass]="{
             'ion-ios-star' : i <= (theaterSelected.stars || 0),
              'ion-ios-star-outline' : i > (theaterSelected.stars || 0)
              }"
             ></i>
      </div>
  </div>

  `,
  styles: [ ]
})
export class SearchMapComponent  {

  @Input() theaterSelected: Partial<Theater> ={};

}
