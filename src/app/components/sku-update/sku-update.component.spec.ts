import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuUpdateComponent } from './sku-update.component';

describe('SkuUpdateComponent', () => {
  let component: SkuUpdateComponent;
  let fixture: ComponentFixture<SkuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
