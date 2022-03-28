import { TestBed } from '@angular/core/testing';

import { TokenedinterceptorInterceptor } from './tokenedinterceptor.interceptor';

describe('TokenedinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenedinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenedinterceptorInterceptor = TestBed.inject(TokenedinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
