import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoistingPageComponent } from './hoisting-page.component';

describe('HoistingPageComponent', () => {
  let component: HoistingPageComponent;
  let fixture: ComponentFixture<HoistingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoistingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoistingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
