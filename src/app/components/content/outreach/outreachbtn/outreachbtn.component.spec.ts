import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachbtnComponent } from './outreachbtn.component';

describe('OutreachbtnComponent', () => {
  let component: OutreachbtnComponent;
  let fixture: ComponentFixture<OutreachbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutreachbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutreachbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
