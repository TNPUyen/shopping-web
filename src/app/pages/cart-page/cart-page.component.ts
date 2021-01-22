import { Component, OnInit } from '@angular/core';
import { PayTrackService } from 'src/app/services/pay-track.service';
import { PizzaCartService } from 'src/app/services/pizza-cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private pizzaCartService:PizzaCartService, private payTrackServices: PayTrackService) { }

  public cartList = this.pizzaCartService.pizzaCartList;

  public total: number = this.pizzaCartService.totalMoney();

  // public total = 0;

  // public status:boolean = false;

  ngOnInit(): void {
  }

  public updateTotalMoney(x: number){
    this.total = x;
  }

  public submitOrder(){
    let status = true;
    console.log("có bug ko?")
    this.payTrackServices.submit(status)
  }
}
