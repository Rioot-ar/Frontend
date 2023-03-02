import { TestBed } from '@angular/core/testing';

import { ActPortfolioService } from './act-portfolio.service';

describe('ActPortfolioService', () => {
  let service: ActPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
