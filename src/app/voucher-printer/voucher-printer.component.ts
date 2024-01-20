import { Component, Input, OnInit } from '@angular/core';
import { Voucher } from '../Model/Voucher';
import { VoucherFakeServiceService } from '../service/voucher-fake-service.service';
import { DatePipe,CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-voucher-printer',
  standalone: true,
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './voucher-printer.component.html',
  styleUrl: './voucher-printer.component.css'
})
export class VoucherPrinterComponent implements OnInit {

  voucher : Voucher
  
  constructor(private voucherFakeServiceService : VoucherFakeServiceService){
    this.voucher = voucherFakeServiceService.getPayload()
  }
  ngOnInit(): void {
    this.voucher = JSON.parse(localStorage.getItem("savedValue") || '{}')
  }

}
