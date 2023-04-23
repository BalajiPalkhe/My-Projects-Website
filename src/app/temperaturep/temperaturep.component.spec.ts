import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturepComponent } from './temperaturep.component';

describe('TemperaturepComponent', () => {
  let component: TemperaturepComponent;
  let fixture: ComponentFixture<TemperaturepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
