import { Injectable } from '@angular/core';

import {AuctionItem} from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor() { }

  getAuctions(): AuctionItem[] {
    return [
      {title: 'Moja pierwsza aukcja', description: ' Opis mojej aukcji 1', price: 100, imgUrl: 'https://picsum.photos/id/36/200/200'},
      {title: 'Moja druga aukcja', description: ' Opis mojej aukcji 2', price: 2333, imgUrl: 'https://picsum.photos/id/12/200/200'},
      {title: 'Moja trzecia aukcja', description: ' Opis mojej aukcji 3', price: 6237, imgUrl: 'https://picsum.photos/id/33/200/200'},
      {title: 'Moja czwarta aukcja', description: ' Opis mojej aukcji 4', price: 400, imgUrl: 'https://picsum.photos/id/412/200/200'},
    ];
  }
}
