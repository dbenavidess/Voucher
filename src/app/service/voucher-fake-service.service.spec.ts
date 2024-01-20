import { TestBed } from '@angular/core/testing';

import { VoucherFakeServiceService } from './voucher-fake-service.service';

describe('VoucherFakeServiceService', () => {
  let service: VoucherFakeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherFakeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
