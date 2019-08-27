import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuctionItem} from '../auction-item';

@Component({
  selector: 'ap-auction-card',
  templateUrl: './auction-card.component.html',
  styles: []
})
export class AuctionCardComponent {
  @Input() auction: AuctionItem;
  // TODO: make it work on tomorrow:
  @Output() addToCart = new EventEmitter<AuctionItem>();
}
