import { TestBed } from '@angular/core/testing';

import { UserDataShareService } from './user-data-share.service';

describe('UserDataShareService', () => {
  let service: UserDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
