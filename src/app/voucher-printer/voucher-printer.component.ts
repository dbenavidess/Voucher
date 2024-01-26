import { Component, Input, OnInit } from '@angular/core';
import { Voucher } from '../Model/Voucher';
import { VoucherFakeServiceService } from '../service/voucher-fake-service.service';
import { DatePipe,CurrencyPipe } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voucher-printer',
  standalone: true,
  imports: [DatePipe,CurrencyPipe,NgxPrintModule,MatIconModule,MatButtonModule],
  templateUrl: './voucher-printer.component.html',
  styleUrl: './voucher-printer.component.css'
})
export class VoucherPrinterComponent implements OnInit {

  voucher : Voucher
  
  constructor(private voucherFakeServiceService : VoucherFakeServiceService, private router : Router){
    this.voucher = voucherFakeServiceService.getPayload()
  }
  ngOnInit(): void {
  }

  goToEdit(){
    this.router.navigate(["/"])
  }

}
