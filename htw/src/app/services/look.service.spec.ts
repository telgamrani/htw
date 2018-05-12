import { TestBed, inject } from '@angular/core/testing';

import { LookService } from './look.service';

describe('LookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LookService]
    });
  });

  it('should be created', inject([LookService], (service: LookService) => {
    expect(service).toBeTruthy();
  }));
});
