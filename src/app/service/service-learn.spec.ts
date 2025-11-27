import { TestBed } from '@angular/core/testing';

import { ServiceLearn } from './service-learn';

describe('ServiceLearn', () => {
  let service: ServiceLearn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLearn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
