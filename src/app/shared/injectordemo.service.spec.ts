import { TestBed } from '@angular/core/testing';

import { InjectordemoService } from './injectordemo.service';

describe('InjectordemoService', () => {
  let service: InjectordemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectordemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
