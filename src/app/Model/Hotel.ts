import { Time } from "@angular/common"

export class Hotel {
    public checkInDate : Date
    public checkInTime : string
    public checkOutDate : Date
    public checkoutTime : string
    public packageName : string
    public servicesSummary : string
    constructor(checkInDate : Date,
        checkInTime : string,
        checkOutDate : Date,
        checkoutTime : string,
        servicesSummary : string,
        packageName : string) {
            this.checkInDate = checkInDate
            this.checkInTime = checkInTime
            this.checkOutDate = checkOutDate
            this.checkoutTime = checkoutTime
            this.servicesSummary = servicesSummary
            this.packageName = packageName
    }
}