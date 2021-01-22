import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopPageRoutingModule } from './shop-page-routing.module';
import { ShopPageComponent } from './shop-page.component';
import { PizzaModule } from '../../modules/pizza/pizza.module';



@NgModule({
  declarations: [ShopPageComponent],
  imports: [
    CommonModule,
    ShopPageRoutingModule,
    PizzaModule
  ]
})
export class ShopPageModule { }
