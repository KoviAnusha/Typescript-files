import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcompComponent } from './forcomp.component';

describe('ForcompComponent', () => {
  let component: ForcompComponent;
  let fixture: ComponentFixture<ForcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
