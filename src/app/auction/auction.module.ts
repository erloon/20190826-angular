import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';


@NgModule({
  declarations: [
    AuctionsComponent,
    PromotionsComponent
  ],
  /*
  providers: [
    AuctionService
  ],
  */
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
