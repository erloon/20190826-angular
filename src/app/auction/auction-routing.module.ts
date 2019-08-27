import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionsComponent } from './auctions/auctions.component';
import { PromotionsComponent } from './promotions/promotions.component';


const routes: Routes = [
  {path: 'auctions', component: AuctionsComponent},
  {path: 'promotions', component: PromotionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
