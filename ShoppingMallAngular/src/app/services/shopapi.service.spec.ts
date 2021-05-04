import { TestBed } from '@angular/core/testing';

import { ShopapiService } from './shopapi.service';

describe('ShopapiService', () => {
  let service: ShopapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
