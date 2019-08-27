import { Pipe, PipeTransform } from '@angular/core';
import {AuctionItem} from './auction-item';

@Pipe({
  name: 'auctionsFilter'
})
export class AuctionsFilterPipe implements PipeTransform {

  transform(auctions: AuctionItem[], titleFilter = ''): AuctionItem[] {
    const filterToLower = titleFilter.toLowerCase();
    return auctions.filter((auction) => {
        return (auction.title || '').toLowerCase().startsWith(filterToLower);
    });
  }

}
