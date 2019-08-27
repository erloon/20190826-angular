import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  restURL = 'http://localhost:3000/auctions';

  constructor(private httpClient: HttpClient) { }

  getAuctions(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.restURL);
  }
}
