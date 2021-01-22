import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaCart } from '../models/pizzaCart.model';
import { PizzaDataService } from './pizza-data.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaCartService {

  constructor(private pizzaDataService: PizzaDataService) { }

  public pizzaCartList: any[] = [];

  public add(pizza: Pizza) {
    console.log(this.pizzaCartList)
    for (let i = 0; i < this.pizzaCartList.length; i++) {
      if (this.pizzaCartList[i].pizza.id == pizza.id) {
        this.pizzaCartList[i].quantity++;
        return;
      }
    }
    this.pizzaCartList.push(new PizzaCart(pizza, 1));
    console.log("hello bug" + this.pizzaCartList)
    // return this.pizzaCartList;
  }

  public removeQuantity(pizza: Pizza) {
    for (let i = 0; i < this.pizzaCartList.length; i++) {
      if (this.pizzaCartList[i].quantity == 1) {
        this.pizzaCartList.splice(i, 1);
      } else {
        if (this.pizzaCartList[i].pizza.id == pizza.id) {
          this.pizzaCartList[i].quantity--;
          console.log(this.pizzaCartList[i].quantity)
          return;
        }
      }
    }
  }

  public removeOnePizza(pizza: Pizza){
    for (let i = 0; i < this.pizzaCartList.length; i++) {
      if (this.pizzaCartList[i].pizza.id == pizza.id) {
        this.pizzaCartList.splice(i, 1);
        return;
      } 
    }
  }

  public totalMoney(){
    let total = 0;
    for (let i = 0; i < this.pizzaCartList.length; i++) {
      total += this.pizzaCartList[i].getTotalPrice();
    }
    return total
  }
}
