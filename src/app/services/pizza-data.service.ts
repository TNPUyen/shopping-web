import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaCart } from '../models/pizzaCart.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaDataService {

  constructor() { }

  public pizzaList: Array<Pizza> = [{
    id: 'pizza1',
    name: 'PRIME BEEF - PIZZA BÒ MÊ-HI-CÔ THƯỢNG HẠNG',
    unitPrice: 329,
    imageUrl: 'https://dominos.vn/Data/Sites/1/Product/577/prime-beef-full.png',
    discount: 0,
    inStock: true
  },{
    id: 'pizza2',
    name: 'MEAT LOVERS - PIZZA 5 LOẠI THỊT THƯỢNG HẠNG',
    unitPrice: 259,
    imageUrl: 'https://dominos.vn/Data/Sites/1/Product/579/meat-lover-full.png',
    discount: 0,
    inStock: true
  },{
    id: 'pizza3',
    name: 'SURF & TURF - PIZZA BÒ & TÔM NƯỚNG KIỂU MỸ',
    unitPrice: 329,
    imageUrl: 'https://dominos.vn/Data/Sites/1/Product/582/surf-and-turf-min-360x240.png',
    discount: 0,
    inStock: true
  },];

  public addPizza(pizza: Pizza) {
     return this.pizzaList.push(pizza);
  }

  public removePizza(pos: number){
    return this.pizzaList.splice(pos, 1);
  }
}
