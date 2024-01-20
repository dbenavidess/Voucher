import { Journey } from "./Journey"
import { Luggage } from "./Luggage"
import { Transfer } from "./Transfer"

export class Tickets{
    public itinerary : Journey[]
    public luggageInformation : Luggage
    public TransferInformation : Transfer

    constructor(itinerary : Journey[],
        luggageInformation : Luggage,
        TransferInformation : Transfer) {
            this.itinerary = itinerary
            this.luggageInformation = luggageInformation
            this.TransferInformation = TransferInformation
    }
}