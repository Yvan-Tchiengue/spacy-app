import { TestBed } from '@angular/core/testing';

import { SpacyapiService } from './spacyapi.service';

describe('SpacyapiService', () => {
  let service: SpacyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
