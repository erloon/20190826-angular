import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { SharedModule } from '../shared/shared.module';
import { AuctionsFilterPipe } from './auctions-filter.pipe';
import { AddAuctionComponent } from './add-auction/add-auction.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AuctionsComponent,
    PromotionsComponent,
    AuctionCardComponent,
    AuctionsFilterPipe,
    AddAuctionComponent,
    ShoppingCartComponent
  ],
  /*
  providers: [
    AuctionService
  ],
  */
  imports: [
    CommonModule,
    AuctionRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    AuctionsComponent
  ]
})
export class AuctionModule { }
