import { TestBed } from '@angular/core/testing';

import { ObservableserviceService } from './observableservice.service';

describe('ObservableserviceService', () => {
  let service: ObservableserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
