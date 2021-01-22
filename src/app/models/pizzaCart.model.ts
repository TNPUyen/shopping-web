import { Pizza } from "./pizza.model";

export class PizzaCart{

    constructor(public pizza: Pizza, public quantity: number) {}

    public getTotalPrice(){
        return this.pizza.unitPrice*1000*this.quantity*(this.pizza.discount == 0 ?1:(1-this.pizza.discount));
    }
}