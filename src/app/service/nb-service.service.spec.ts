import { TestBed } from '@angular/core/testing';

import { NbServiceService } from './nb-service.service';

describe('NbServiceService', () => {
  let service: NbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
