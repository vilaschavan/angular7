import { TestBed } from '@angular/core/testing';

import { RegistrationDetailsService } from './registration-details.service';

describe('RegistrationDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationDetailsService = TestBed.get(RegistrationDetailsService);
    expect(service).toBeTruthy();
  });
});
