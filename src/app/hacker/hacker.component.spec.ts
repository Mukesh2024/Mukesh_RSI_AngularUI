import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerComponent } from './hacker.component';

describe('HackerComponent', () => {
  let component: HackerComponent;
  let fixture: ComponentFixture<HackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackerComponent]
    });
    fixture = TestBed.createComponent(HackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
