import {Component, OnInit} from '@angular/core';
import {BillItem} from '../Model/Bill/BillItem';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { VoucherPrinterComponent } from '../voucher-printer/voucher-printer.component';
import { Journey } from '../Model/Tickets/Journey';
import { Time } from '@angular/common';
import { Client } from '../Model/Client';
import { Salesman } from '../Model/Salesman';
import { Hotel } from '../Model/Hotel';
import { Luggage } from '../Model/Tickets/Luggage';
import { Transfer } from '../Model/Tickets/Transfer';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Bill } from '../Model/Bill/Bill';
import { Tickets } from '../Model/Tickets/Tickets';
import { VoucherFakeServiceService } from '../service/voucher-fake-service.service';
import { Voucher } from '../Model/Voucher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voucher-form',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatListModule, MatButtonModule,
     FormsModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, NgxMaterialTimepickerModule, VoucherPrinterComponent],
  templateUrl: './voucher-form.component.html',
  styleUrl: './voucher-form.component.css'
})
export class VoucherFormComponent implements OnInit{
  
  bill : Bill = new Bill([])
  currentItem : BillItem = new BillItem("",0)

  luggage : Luggage = new Luggage(0,0,0,0,0)
  transfer : Transfer = new Transfer("","",new Date(),new Date())
  tickets : Tickets = new Tickets([],this.luggage,this.transfer)

  client : Client = new Client("",1)
  salesman : Salesman = new Salesman("","","","")

  hotel : Hotel = new Hotel(new Date,"00:00",new Date(),"00:00","","")
  voucher : Voucher = new Voucher(this.tickets,this.hotel,this.bill,this.salesman,this.client,"")
  step = 0;

  constructor(private voucherFakeServiceService : VoucherFakeServiceService, private router : Router){
  }

  ngOnInit(): void {
    this.voucherFakeServiceService.setPayload(this.voucher)
  }

  setStep(index: number) {
    this.step = index
  }

  nextStep() {
    this.step++
  }

  prevStep() {
    this.step--
  }
  
  addDetail(){
    this.bill.addItem(this.currentItem)
    this.currentItem = new BillItem("",0)
  }
  
  deleteDetail(index:number){
    this.bill.billItems.splice(index,1)
  }

  addJourney(){
    let newJourney = new Journey("Trayecto #" + (this.tickets.itinerary.length+1),"",new Date(),"","","","00:00 AM","00:00 AM")
    this.tickets.itinerary.push(newJourney)
  }

  deleteJourney(index:number){
    this.tickets.itinerary.splice(index,1)
  }

  onSubmit(){
    this.voucherFakeServiceService.setPayload(this.voucher) 
    console.log(JSON.stringify(this.voucher))
    localStorage.setItem("savedValue",JSON.stringify(this.voucher))
    this.router.navigate(["/print"])
  }
}
