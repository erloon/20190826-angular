import { Component, OnInit } from '@angular/core';
import {AuctionItem} from '../auction-item';
import {AuctionService} from '../auction.service';

@Component({
  selector: 'ap-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css'],
  // providers: [AuctionService]
})
export class AuctionsComponent implements OnInit {

  auctions: AuctionItem[] = [];

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
    this.auctions = this.auctionService.getAuctions();
  }

}
