import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcpComponent } from './calcp.component';

describe('CalcpComponent', () => {
  let component: CalcpComponent;
  let fixture: ComponentFixture<CalcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
