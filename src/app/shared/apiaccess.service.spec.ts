import { TestBed } from '@angular/core/testing';

import { APIaccessService } from './apiaccess.service';

describe('APIaccessService', () => {
  let service: APIaccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIaccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
