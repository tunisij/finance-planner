import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualSpendInputComponent } from './actual-spend-input.component';

describe('ActualSpendInputComponent', () => {
  let component: ActualSpendInputComponent;
  let fixture: ComponentFixture<ActualSpendInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualSpendInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualSpendInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
