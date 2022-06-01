import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div>
    <div *ngIf="title" class="title">{{title}}</div>
      <div class="{{contentClass}}">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class CardComponent {

  @Input() cardClass: string = "";
  @Input() title: string = "";

  @Input() contentClass: string = "";

  @HostBinding('className') get className() {
    let cls = 'card';
    cls += this.cardClass ? ` ${this.cardClass}` : '';
    return cls;
  }
}
