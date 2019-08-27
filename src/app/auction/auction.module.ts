import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsComponent } from './auctions/auctions.component';


@NgModule({
  declarations: [
    AuctionsComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
