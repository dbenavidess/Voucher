import { Time } from "@angular/common"

export class Journey{
    public name : string
    public type : string
    public date : Date
    public origin : string
    public destiny : string
    public flightType : string
    public departure : string
    public arrival : string

    public constructor(name: string, type: string, date: Date, origin: string, destiny: string, flightType: string, departure: string, arrival: string) {
            this.name = name
            this.type = type
            this.date = date
            this.origin = origin
            this.destiny = destiny
            this.flightType = flightType
            this.departure = departure
            this.arrival = arrival
    }
}