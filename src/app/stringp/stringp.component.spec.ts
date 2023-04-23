import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringpComponent } from './stringp.component';

describe('StringpComponent', () => {
  let component: StringpComponent;
  let fixture: ComponentFixture<StringpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
