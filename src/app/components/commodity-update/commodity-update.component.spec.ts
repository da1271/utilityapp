import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityUpdateComponent } from './commodity-update.component';

describe('CommodityUpdateComponent', () => {
  let component: CommodityUpdateComponent;
  let fixture: ComponentFixture<CommodityUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
