import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaCart } from 'src/app/models/pizzaCart.model';
import { PizzaCartService } from 'src/app/services/pizza-cart.service';

@Component({
  selector: 'app-cart-pizza',
  templateUrl: './cart-pizza.component.html',
  styleUrls: ['./cart-pizza.component.scss']
})
export class CartPizzaComponent implements OnInit {

  constructor(private pizzaCartService: PizzaCartService) { }

  @Input()
  public pizzaCart: any;

  public cartList = this.pizzaCartService.pizzaCartList;

  @Output() public moneyChange: EventEmitter<number> = new EventEmitter();



  addMorePizza(x:PizzaCart) {
    this.pizzaCartService.add(x.pizza);
    this.moneyChange.emit(this.pizzaCartService.totalMoney());
  }

  removeQuantityPizza(x: Pizza){
    this.pizzaCartService.removeQuantity(x);
    this.moneyChange.emit(this.pizzaCartService.totalMoney());
  }

  removePizza(x: Pizza){
    this.pizzaCartService.removeOnePizza(x);
    this.moneyChange.emit(this.pizzaCartService.totalMoney());
  }


  ngOnInit(): void {
    
  }

}
