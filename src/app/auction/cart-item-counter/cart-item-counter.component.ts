import { Component } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'ap-cart-item-counter',
  template: `
   <div class="m-2">Masz już {{ cartService.countCartItems() | async }} elmentów w koszyku!</div>
    <!--<div class="m-2">Masz już {{ countItems  }} elmentów w koszyku!</div>-->
  `,
  styles: []
})
export class CartItemCounterComponent {

  // countItems = 0;

  constructor(public cartService: CartService) {
    /*this.cartService.getCartItems().subscribe((list) => {
      this.countItems = list.length;
      console.log('Hello len:', list.length);
    });*/
  }

}
