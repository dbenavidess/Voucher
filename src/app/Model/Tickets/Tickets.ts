import { Journey } from "./Journey"
import { Luggage } from "./Luggage"
import { Transfer } from "./Transfer"

export class Tickets{
    public itinerary : Journey[]
    public luggageInformation : Luggage
    public TransferInformation : Transfer

    constructor() {
        this.luggageInformation = new Luggage(0,0,0,0,0)
        this.TransferInformation = new Transfer("","",new Date(),new Date())
        this.itinerary = []
    }
}