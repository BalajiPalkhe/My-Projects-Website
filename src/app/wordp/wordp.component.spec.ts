import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpComponent } from './wordp.component';

describe('WordpComponent', () => {
  let component: WordpComponent;
  let fixture: ComponentFixture<WordpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
