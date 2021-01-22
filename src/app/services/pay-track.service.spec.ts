import { TestBed } from '@angular/core/testing';

import { PayTrackService } from './pay-track.service';

describe('PayTrackService', () => {
  let service: PayTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
