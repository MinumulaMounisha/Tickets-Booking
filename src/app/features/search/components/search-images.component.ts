import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theater } from 'src/app/core/Theatre.model';

@Component({
  selector: 'app-search-images',
  template: `
  
  <img [src]="imgMain" width="100%" height="150">
  <div class="nested">
    <div *ngFor="let img of theaterSelected.images"><img (click)="changeImgHand(img)" [src]="img" width="100%"></div>
  </div>


`, /* <div class="card gallery scrollable"> </div> */
styles: []
})
export class SearchImagesComponent {

  @Input() theaterSelected: Partial<Theater> = {};
  @Input() imgMain:string = " ";

  @Output() changeImg: EventEmitter<string> = new EventEmitter<string>();

  changeImgHand(img:string){
      this.changeImg.emit(img);
  }

}
