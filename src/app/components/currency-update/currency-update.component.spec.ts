import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyUpdateComponent } from './currency-update.component';

describe('CurrencyUpdateComponent', () => {
  let component: CurrencyUpdateComponent;
  let fixture: ComponentFixture<CurrencyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
