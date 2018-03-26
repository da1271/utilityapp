import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFragranceComponent } from './product-fragrance.component';

describe('ProductFragranceComponent', () => {
  let component: ProductFragranceComponent;
  let fixture: ComponentFixture<ProductFragranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFragranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
