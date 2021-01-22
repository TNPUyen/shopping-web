import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaCartService } from 'src/app/services/pizza-cart.service';
import { PizzaDataService } from 'src/app/services/pizza-data.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  constructor(private pizzaService: PizzaCartService) { }

  @Input()
  public pizza: any;

  // @Output() public addPizzaToCart: EventEmitter<Pizza> = new EventEmitter()

  public clickToAdd(x:Pizza){
    console.log("bug nè" + x)
    this.pizzaService.add(x)
  }

  ngOnInit(): void {
  }

}
