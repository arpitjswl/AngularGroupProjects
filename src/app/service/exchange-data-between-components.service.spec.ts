import { TestBed } from '@angular/core/testing';

import { ExchangeDataBetweenComponentsService } from './exchange-data-between-components.service';

describe('ExchangeDataBetweenComponentsService', () => {
  let service: ExchangeDataBetweenComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeDataBetweenComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
