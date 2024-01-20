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
    constructor(tickets : Tickets,
        hotel : Hotel,
        bill : Bill,
        salesman : Salesman,
        client : Client,
        planName : string) {
            this.tickets = tickets
            this.hotel = hotel
            this.bill = bill
            this.salesman = salesman
            this.client = client
            this.planName = planName
    }
}