import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTypeUpdateComponent } from './label-type-update.component';

describe('LabelTypeUpdateComponent', () => {
  let component: LabelTypeUpdateComponent;
  let fixture: ComponentFixture<LabelTypeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelTypeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
