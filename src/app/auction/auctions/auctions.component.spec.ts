import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import {Observable, of} from 'rxjs';

import { AuctionsComponent } from './auctions.component';
import {AuctionsFilterPipe} from '../auctions-filter.pipe';
import {AuctionService} from '../auction.service';
import {AuctionItem} from '../auction-item';

describe('AuctionsComponent', () => {
  let component: AuctionsComponent;
  let fixture: ComponentFixture<AuctionsComponent>;

  class AuctionServiceMock {
    getAuctions(): Observable<AuctionItem[]> {
      return of([
        {title: 'Moja aukcja'} as AuctionItem
      ]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionsComponent, AuctionsFilterPipe ],
      providers: [
        { provide: AuctionService, useClass: AuctionServiceMock}
        ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all the auctions', () => {

    expect(component.auctions).toEqual([]);

    fixture.detectChanges();
    expect(component.auctions).toEqual([{ title: 'Moja aukcja' } as AuctionItem]);
  });
});
