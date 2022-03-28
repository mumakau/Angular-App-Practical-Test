import { TestBed } from '@angular/core/testing';

import { AutheticationGuardGuard } from './authetication-guard.guard';

describe('AutheticationGuardGuard', () => {
  let guard: AutheticationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutheticationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
