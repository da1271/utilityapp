import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedReasonCodeComponent } from './rejected-reason-code.component';

describe('RejectedReasonCodeComponent', () => {
  let component: RejectedReasonCodeComponent;
  let fixture: ComponentFixture<RejectedReasonCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedReasonCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedReasonCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
