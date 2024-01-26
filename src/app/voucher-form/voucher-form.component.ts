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
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { VoucherPrinterComponent } from '../voucher-printer/voucher-printer.component';
import { Journey } from '../Model/Tickets/Journey';
import {FormsModule} from '@angular/forms';
import { VoucherFakeServiceService } from '../service/voucher-fake-service.service';
import { Voucher } from '../Model/Voucher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voucher-form',
  standalone: true,
  imports: [
    MatExpansionModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatListModule, MatButtonModule,
    FormsModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, NgxMaterialTimepickerModule,
    VoucherPrinterComponent
  ],
  templateUrl: './voucher-form.component.html',
  styleUrl: './voucher-form.component.css'
})
export class VoucherFormComponent implements OnInit{
  
  currentItem : BillItem = new BillItem("",0)
  voucher! : Voucher
  step = 0;

  constructor(
    private voucherFakeServiceService : VoucherFakeServiceService,
    private router : Router,
    private _snackBar: MatSnackBar){

    if(this.voucherFakeServiceService.getPayload() === undefined){
      this.voucher = new Voucher()
      this.fetchSalesmanDataFromLocalStorage()
      this.voucherFakeServiceService.setPayload(this.voucher)
    }
    else{
      this.voucher = this.voucherFakeServiceService.getPayload()
    }
  }

  ngOnInit(): void {
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
    this.voucher.bill.addItem(this.currentItem)
    this.currentItem = new BillItem("",0)
  }
  
  deleteDetail(index:number){
    this.voucher.bill.billItems.splice(index,1)
  }

  addJourney(){
    let newJourney = new Journey("Trayecto #" + (this.voucher.tickets.itinerary.length+1),"",new Date(),"","","","00:00 AM","00:00 AM")
    this.voucher.tickets.itinerary.push(newJourney)
  }

  deleteJourney(index:number){
    this.voucher.tickets.itinerary.splice(index,1)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit(){
    if (!this.isValid()){
      this.openSnackBar("Debe añadir al menos un trayecto","Deacuerdo")
      return
    }
    this.voucherFakeServiceService.setPayload(this.voucher) 
    this.saveSalesmanDataOnLocalStorage()
    this.router.navigate(["/print"])
  }

  saveSalesmanDataOnLocalStorage(){
    localStorage.setItem("salesman",JSON.stringify(this.voucher.salesman))
  }
  
  isValid() : boolean{
    return this.voucher.tickets.itinerary.length > 0
  }
  fetchSalesmanDataFromLocalStorage(){
    let salesman : any = JSON.parse(localStorage.getItem("salesman") || '{}')
    this.voucher.salesman.RNT = salesman === null? "" : salesman.RNT
    this.voucher.salesman.name = salesman === null? "" : salesman.name
    this.voucher.salesman.contact = salesman === null? "" : salesman.contact
  }
}
