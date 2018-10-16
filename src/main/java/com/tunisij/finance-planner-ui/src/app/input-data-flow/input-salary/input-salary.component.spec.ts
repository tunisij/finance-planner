import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSalaryComponent } from './input-salary.component';

describe('InputSalaryComponent', () => {
  let component: InputSalaryComponent;
  let fixture: ComponentFixture<InputSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
