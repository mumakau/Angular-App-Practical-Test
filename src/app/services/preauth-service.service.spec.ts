import { TestBed } from '@angular/core/testing';

import { PreauthServiceService } from './preauth-service.service';

describe('PreauthServiceService', () => {
  let service: PreauthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreauthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
