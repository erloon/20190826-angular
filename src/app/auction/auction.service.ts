import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuctionItem } from './auction-item';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  restURL = `${environment.baseURL}/auctions`;

  constructor(private httpClient: HttpClient) { }

  getAuctions(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.restURL);
  }

  addAuction(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.restURL, auction);
  }
}
