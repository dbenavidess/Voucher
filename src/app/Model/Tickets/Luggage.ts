export class Luggage {
    public maxHandLuggage : number 
    public handLuggageWeight : number
    public maxLuggage : number
    public LuggageWeight : number
    public maxAirplaneHold : number
    
    constructor(maxHandLuggage : number,
        handLuggageWeight : number,
        maxLuggage : number,
        LuggageWeight : number,
        maxAirplaneHold : number) {
            this.maxHandLuggage = maxHandLuggage
            this.handLuggageWeight = handLuggageWeight
            this.maxLuggage = maxLuggage
            this.LuggageWeight = LuggageWeight
            this.maxAirplaneHold = maxAirplaneHold
        
    }
}