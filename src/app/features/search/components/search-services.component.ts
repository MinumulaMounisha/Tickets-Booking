import { Component, Input, OnInit } from '@angular/core';
import { Theater } from 'src/app/core/Theatre.model';

@Component({
  selector: 'app-search-services',
  template: `
  <!--SERVICES-->

    <div class="nested">
      <div *ngFor="let service of theaterSelected.services"><i class="icon ion-ios-{{service}}" title="{{service}}"></i></div>
    </div>

`,  /* <div class="card services scrollable">
<div class="title">Services</div> </div>*/
  styles: []
})
export class SearchServicesComponent {

  constructor() { }
  @Input() theaterSelected: Partial<Theater> ={};

}
