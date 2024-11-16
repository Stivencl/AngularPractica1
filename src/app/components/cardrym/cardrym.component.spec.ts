import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrymComponent } from './cardrym.component';

describe('CardrymComponent', () => {
  let component: CardrymComponent;
  let fixture: ComponentFixture<CardrymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardrymComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardrymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
