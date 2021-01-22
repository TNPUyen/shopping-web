import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaDataService } from 'src/app/services/pizza-data.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaData: PizzaDataService) { }

  public list: Array<Pizza> = this.pizzaData.pizzaList;


  ngOnInit(): void {
  }

}
