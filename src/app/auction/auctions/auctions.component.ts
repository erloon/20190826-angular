import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, /* Subscription */} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {AuctionItem} from '../auction-item';
import {AuctionService} from '../auction.service';
import {CartService} from '../cart.service';


@Component({
  selector: 'ap-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
  // providers: [AuctionService]
})
export class AuctionsComponent implements OnInit, OnDestroy {

  // auctionSub = new Subscription();
  unsubSubject = new Subject<void>();
  auctions: AuctionItem[] = [];

  constructor(private auctionService: AuctionService, private cartService: CartService) { }

  ngOnInit() {
    /*const sub1 = */
    this.auctionService.getAuctions()
      .pipe(takeUntil(this.unsubSubject))
      .subscribe((auctions: AuctionItem[]) => {
        this.auctions = auctions;
        console.log(auctions);
      });
    // this.auctionSub.add(sub1);

    this.auctionService.getAuctions()
      .pipe(takeUntil(this.unsubSubject))
      .subscribe((auctions: AuctionItem[]) => {
        console.log('2', auctions);
      });
    /*
    // ew. powrót:
    const sub2 = this.auctionService.getAuctions()
      .subscribe((auctions: AuctionItem[]) => {
        console.log('moja sub2 ', auctions);
      });
    this.auctionSub.add(sub2);
    */
  }

  ngOnDestroy(): void {
    // this.auctionSub.unsubscribe();
    this.unsubSubject.next();
    this.unsubSubject.complete();
  }

  addAuctionToCart(auction: AuctionItem) {
    this.cartService.addToCart(auction);
  }
}
