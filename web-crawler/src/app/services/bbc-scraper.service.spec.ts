import { TestBed } from '@angular/core/testing';

import { BbcScraperService } from './bbc-scraper.service';

describe('BbcScraperService', () => {
  let service: BbcScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbcScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
