import { TestBed } from '@angular/core/testing';

import { PricefetcherService } from './pricefetcher.service';

describe('PricefetcherService', () => {
  let service: PricefetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricefetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
