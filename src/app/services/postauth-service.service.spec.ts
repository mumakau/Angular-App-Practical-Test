import { TestBed } from '@angular/core/testing';

import { PostauthServiceService } from './postauth-service.service';

describe('PostauthServiceService', () => {
  let service: PostauthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostauthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
