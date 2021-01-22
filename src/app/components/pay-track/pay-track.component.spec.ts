import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTrackComponent } from './pay-track.component';

describe('PayTrackComponent', () => {
  let component: PayTrackComponent;
  let fixture: ComponentFixture<PayTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
