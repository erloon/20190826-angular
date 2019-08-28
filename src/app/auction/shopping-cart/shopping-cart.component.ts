import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'ap-shopping-cart',
  template: `
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let item of cartService.getCartItems() | async">
            <em>{{item | json}}</em>
        </li>
    </ul>
  `,
  styles: []
})
export class ShoppingCartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit() {
    // Tego nikt nie może zrobić ! (łamiemy zasadę "single source of truth")
    // this.cartService.getCartItems().next([{ title: 'Troll'} as AuctionItem]);
  }

}
