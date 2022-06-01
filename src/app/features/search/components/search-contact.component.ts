import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-search-contact',
  template: `
  <form  #fc="ngForm" (ngSubmit)="sendMailHand(fc)" >
    <input type="text" placeholder="Your email*" name="mail" [ngModel] required>
    <textarea cols="20" rows="6" placeholder="Your message*" name="message" [ngModel] required></textarea>
    <button type="submit">SEND</button>
  </form>
  `,
  styles: [
  ]
})

export class SearchContactComponent {

  @Output() sendMail: EventEmitter<NgForm> = new EventEmitter<NgForm>();
  
  sendMailHand(fc:NgForm){
    this.sendMail.emit(fc);
  }

}
