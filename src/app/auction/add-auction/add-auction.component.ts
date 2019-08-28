import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuctionItem } from '../auction-item';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'ap-add-auction',
  templateUrl: './add-auction.component.html',
  styles: [
    `
      input.ng-invalid.ng-touched {
        border-color: darkred;
      }
    `
  ]
})
export class AddAuctionComponent {

  imgId = 1;
  errorMessage = '';

  constructor(private auctionService: AuctionService) { }

  handleSubmit(auctionForm: NgForm) {
    const auction = auctionForm.value as AuctionItem;
    auction.imgUrl = `https://picsum.photos/id/${this.imgId}/200/200`;
    // console.log(auction);
    this.errorMessage = '';
    this.auctionService
      .addAuction(auction)
      .subscribe(() => {
        auctionForm.reset();
        this.imgId = 1;
      }, (error) => {
        this.errorMessage = 'coś poszło nie tak 😢';
      });
  }
}
