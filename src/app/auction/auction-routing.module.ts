import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {AddAuctionComponent} from './add-auction/add-auction.component';


const routes: Routes = [
  {path: 'auctions', component: AuctionsComponent},
  {path: 'promotions', component: PromotionsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'add-auction', component: AddAuctionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
