import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuctionItem} from '../auction-item';

@Component({
  selector: 'ap-auction-card',
  templateUrl: './auction-card.component.html',
  styles: []
})
export class AuctionCardComponent {
  @Input() auction: AuctionItem;
  @Input() showCartButton = true;
  @Output() addToCart = new EventEmitter<AuctionItem>();
}
