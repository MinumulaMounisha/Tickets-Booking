import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search-theater',
  template: `
    <form #f="ngForm" class="form1" (ngSubmit) = "searchTheater.emit(f.value.movie)">
      <input type="text" placeholder="movie" name="movie" [ngModel]="movieSearched">
      <div>
      <button type="submit" class="btn">SEARCH</button>
      </div>
    </form>
  `,
  styles: [ `.form1{
    padding:1rem;
  }
  input[type=text]{
    width: 100%;
    padding: 12px 10px;
    margin: 5px 0;
  }
  button[type=submit] {
    width: 100%;
    background-color: #00AE76;
    color: white;
    padding: 10px 0px;
    margin: 8px;
  }

  `
  ]
})
export class SearchTheaterComponent {

  @Input() movieSearched: string = "";
  @Output() searchTheater: EventEmitter<string> = new EventEmitter<string>();

}
