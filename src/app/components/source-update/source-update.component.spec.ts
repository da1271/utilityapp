import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceUpdateComponent } from './source-update.component';

describe('SourceUpdateComponent', () => {
  let component: SourceUpdateComponent;
  let fixture: ComponentFixture<SourceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
