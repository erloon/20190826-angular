import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
    AuctionRoutingModule,
    HttpClientModule
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
