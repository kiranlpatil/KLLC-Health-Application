import { TestBed } from '@angular/core/testing';

import { LoadingServiceService } from './loading-service.service';

describe('LoadingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingServiceService = TestBed.get(LoadingServiceService);
    expect(service).toBeTruthy();
  });
});
