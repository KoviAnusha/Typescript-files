import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkwithhttpComponent } from './workwithhttp.component';

describe('WorkwithhttpComponent', () => {
  let component: WorkwithhttpComponent;
  let fixture: ComponentFixture<WorkwithhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkwithhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkwithhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
