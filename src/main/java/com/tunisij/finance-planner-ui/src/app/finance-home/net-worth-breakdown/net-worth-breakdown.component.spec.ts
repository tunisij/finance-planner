import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetWorthBreakdownComponent } from './net-worth-breakdown.component';

describe('NetWorthBreakdownComponent', () => {
  let component: NetWorthBreakdownComponent;
  let fixture: ComponentFixture<NetWorthBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetWorthBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetWorthBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
