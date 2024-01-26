import { Bill } from "./Bill/Bill";
import { Client } from "./Client";
import { Hotel } from "./Hotel";
import { Salesman } from "./Salesman";
import { Tickets } from "./Tickets/Tickets";
export class Voucher {
    public planName : string
    public tickets : Tickets
    public hotel : Hotel
    public bill : Bill 
    public salesman : Salesman
    public client : Client
    constructor() {
            this.bill = new Bill([])
            let tickets = new Tickets()
            this.client = new Client("",1)
            this.salesman = new Salesman("","","","")
            this.hotel = new Hotel(new Date,"00:00",new Date(),"00:00","","")
            this.tickets = tickets
            this.planName = ""
    }
}