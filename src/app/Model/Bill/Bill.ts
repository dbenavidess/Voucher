import { BillItem } from "./BillItem";

export class Bill {
    public billItems : BillItem[]
    public total : number
    constructor(billItems : BillItem[] ) {
        this.billItems = billItems
        this.total = this.calculateTotal()
    }

    private calculateTotal() : number{
        var  total : number = 0
        this.billItems.forEach((item : BillItem) => {
            total+=item.value
        })
        return total
    }

    public getTotal() : number{
        return this.total
    }

    public addItem(billItem : BillItem) : void{
        this.billItems.push(billItem)
        this.total = this.calculateTotal()
    }
}