import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitheventsComponent } from './withevents.component';

describe('WitheventsComponent', () => {
  let component: WitheventsComponent;
  let fixture: ComponentFixture<WitheventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitheventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitheventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
