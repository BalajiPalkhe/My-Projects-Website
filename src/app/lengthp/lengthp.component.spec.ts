import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthpComponent } from './lengthp.component';

describe('LengthpComponent', () => {
  let component: LengthpComponent;
  let fixture: ComponentFixture<LengthpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LengthpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
