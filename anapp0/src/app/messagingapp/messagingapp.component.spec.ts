import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingappComponent } from './messagingapp.component';

describe('MessagingappComponent', () => {
  let component: MessagingappComponent;
  let fixture: ComponentFixture<MessagingappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
