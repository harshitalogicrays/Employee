import { TestBed } from '@angular/core/testing';

import { ExperimentalinjectordemoService } from './experimentalinjectordemo.service';

describe('ExperimentalinjectordemoService', () => {
  let service: ExperimentalinjectordemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperimentalinjectordemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
