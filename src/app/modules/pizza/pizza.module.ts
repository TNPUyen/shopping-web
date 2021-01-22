import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CartPizzaComponent } from '../../components/cart-pizza/cart-pizza.component';

import { PizzaComponent } from '../../components/pizza/pizza.component';
import { PizzaListComponent } from '../../components/pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    CartPizzaComponent,
    PizzaComponent, 
    PizzaListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartPizzaComponent,
    PizzaComponent, 
    PizzaListComponent,
  ]
})
export class PizzaModule { }
