import { Injectable } from '@angular/core';
import { Voucher } from '../Model/Voucher';

@Injectable({
  providedIn: 'root'
})
export class VoucherFakeServiceService {

  private payload! : Voucher

  constructor() { }
  
  getPayload(){
    return this.payload
  }

  setPayload(voucher:Voucher){
    this.payload = voucher
  }

}
