import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraypComponent } from './arrayp.component';

describe('ArraypComponent', () => {
  let component: ArraypComponent;
  let fixture: ComponentFixture<ArraypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraypComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
