import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSizeComponent } from './order-size.component';

describe('OrderSizeComponent', () => {
  let component: OrderSizeComponent;
  let fixture: ComponentFixture<OrderSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
