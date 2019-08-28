import { AuctionsFilterPipe } from './auctions-filter.pipe';
import {AuctionItem} from './auction-item';

describe('AuctionsFilterPipe', () => {

  let pipe;

  beforeEach(() => {
    pipe = new AuctionsFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter the auctions properly', () => {
    // Given
    const auctions: AuctionItem[] = [
      {title: 'Czajnik'} as AuctionItem,
      {title: 'Hello World'} as AuctionItem,
      {title: 'Lodówka'} as AuctionItem,
    ];
    const filterBy = 'Hello';

    // When
    const result = pipe.transform(auctions, filterBy);

    // Then
    expect(result).toEqual([
      {title: 'Hello World'},
    ]);
  });

  it('should filter case insensitive', () => {
    // Given
    const auctions: AuctionItem[] = [
      {title: 'Czajnik'} as AuctionItem,
      {title: 'GOODBYE World'} as AuctionItem,
      {title: 'Goodbye World'} as AuctionItem,
      {title: 'Lodówka'} as AuctionItem,
    ];
    const filterBy = 'GooDBye';

    // When
    const result = pipe.transform(auctions, filterBy);

    // Then
    expect(result).toEqual([
      {title: 'GOODBYE World'},
      {title: 'Goodbye World'}
    ]);
  });
});
