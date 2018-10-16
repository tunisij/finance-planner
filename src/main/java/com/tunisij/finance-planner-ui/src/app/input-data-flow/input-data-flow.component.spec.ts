import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataFlowComponent } from './input-data-flow.component';

describe('InputDataFlowComponent', () => {
  let component: InputDataFlowComponent;
  let fixture: ComponentFixture<InputDataFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
