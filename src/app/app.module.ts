import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AuctionModule } from './auction/auction.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      MainMenuComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      AuctionModule,
      SharedModule
    ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
