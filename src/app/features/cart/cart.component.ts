import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/Theatre.model';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( public cartService: CartService) { }

  ngOnInit(): void {
  }

  removeCart(row: Cart){
    this.cartService.removeFromCart(row.id);
  }
}
