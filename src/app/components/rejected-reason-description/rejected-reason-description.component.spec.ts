import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedReasonDescriptionComponent } from './rejected-reason-description.component';

describe('RejectedReasonDescriptionComponent', () => {
  let component: RejectedReasonDescriptionComponent;
  let fixture: ComponentFixture<RejectedReasonDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedReasonDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedReasonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
