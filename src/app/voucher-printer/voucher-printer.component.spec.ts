import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherPrinterComponent } from './voucher-printer.component';

describe('VoucherPrinterComponent', () => {
  let component: VoucherPrinterComponent;
  let fixture: ComponentFixture<VoucherPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherPrinterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
