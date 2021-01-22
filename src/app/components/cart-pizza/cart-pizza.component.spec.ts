import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPizzaComponent } from './cart-pizza.component';

describe('CartPizzaComponent', () => {
  let component: CartPizzaComponent;
  let fixture: ComponentFixture<CartPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
