import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theater } from 'src/app/core/Theatre.model';

@Component({
  selector: 'app-search-theaterlist',
  template: `
  <div class="separator"></div>
        <div class="font-big">Movie {{ movieSearched  }} in Theaters</div>

        <div *ngFor="let theater of theaters" (click)="selTheater.emit(theater)" 
        [ngClass]="{
          'active': theater.id === theaterSelected.id
        }"
       class="vert-grid separator">
          <div class="horiz-grid separator">
          <div>{{ theater.name }} </div>
         
          <div>{{ theater.timings }}</div>
         
          <div>Available Tickets {{ theater.availability }}</div>

          </div>

        </div>

        <div class="separator"></div>
        <div *ngIf="theaters.length>=0" class="horiz-grid">
          <em>{{theaters.length}} risultat{{theaters.length === 1 ? 'o' : 'i'}}</em>
        </div>

  `,
  styles: [
  ]
})
export class SearchTheaterlistComponent {

  @Input() movieSearched: string = "";
  @Input() theaters:Theater[] = [];
  @Input() theaterSelected: any = "";

  @Output() selTheater: EventEmitter<Theater> = new EventEmitter<Theater>();
}
