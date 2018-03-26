import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuDescriptionUpdateComponent } from './sku-description-update.component';

describe('SkuDescriptionUpdateComponent', () => {
  let component: SkuDescriptionUpdateComponent;
  let fixture: ComponentFixture<SkuDescriptionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuDescriptionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuDescriptionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
