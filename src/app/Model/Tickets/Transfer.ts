export class Transfer {
    public type : string
    public route : string
    public firstUse : Date
    public secondUse : Date
    
    constructor(type : string, route : string, firstUse : Date, secondUse : Date) {
            this.type = type
            this.route = route
            this.firstUse = firstUse
            this.secondUse = secondUse
    }
}