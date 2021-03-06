import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMethodComponent } from './delivery-method.component';

describe('DeliveryMethodComponent', () => {
  let component: DeliveryMethodComponent;
  let fixture: ComponentFixture<DeliveryMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
