import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfcompComponent } from './ifcomp.component';

describe('IfcompComponent', () => {
  let component: IfcompComponent;
  let fixture: ComponentFixture<IfcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
