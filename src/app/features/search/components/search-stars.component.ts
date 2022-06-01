import { Component, Input, OnInit } from '@angular/core';
import { Theater } from 'src/app/core/Theatre.model';

@Component({
  selector: 'app-search-stars',
  template: `
  <div class="separator"></div>
    <div class="font-superbig">
        {{theaterSelected.rate}}
    <i class="ion-ios-person"></i>
  </div>
  <div>
    <i  *ngFor="let star of [1,2,3,4,5]; let i = index"
    class="icon "
    [ngClass]="{
       'ion-ios-star' : i <= (theaterSelected.stars || 0),
       'ion-ios-star-outline' : i > (theaterSelected.stars || 0)
       }"
    ></i>
  
  </div>
  `,
  styles: [
  ]
})
export class SearchStarsComponent  {

  @Input() theaterSelected: Partial<Theater> ={};

}
