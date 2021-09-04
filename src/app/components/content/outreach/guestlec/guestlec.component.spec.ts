import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestlecComponent } from './guestlec.component';

describe('GuestlecComponent', () => {
  let component: GuestlecComponent;
  let fixture: ComponentFixture<GuestlecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestlecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestlecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
