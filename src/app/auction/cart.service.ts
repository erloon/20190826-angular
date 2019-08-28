import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  auctionsSubject = new BehaviorSubject<AuctionItem[]>([]);
  countItem$ = this.auctionsSubject.pipe(map(items => items.length));
  // auctions: AuctionItem[] = [];

  addToCart(auction: AuctionItem) {
    //
    const auctions = this.auctionsSubject.getValue();
    // auctions.push(auction);
    // this.auctionsSubject.next(auctions);
    // spread operator ...
    this.auctionsSubject.next([...auctions, auction]);
  }

  getCartItems(): Observable<AuctionItem[]> {
    // return this.auctions;
    return this.auctionsSubject.asObservable();
  }

  countCartItems(): Observable<number> {
    // return this.auctions.length;
    return this.countItem$;
  }
}
