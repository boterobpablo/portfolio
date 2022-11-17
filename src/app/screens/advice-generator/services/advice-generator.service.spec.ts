import { TestBed } from '@angular/core/testing';

import { AdviceGeneratorService } from './advice-generator.service';

describe('AdviceGeneratorService', () => {
  let service: AdviceGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
