import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCitySelectComponent } from './weather-city-select.component';

describe('WeatherCitySelectComponent', () => {
  let component: WeatherCitySelectComponent;
  let fixture: ComponentFixture<WeatherCitySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCitySelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
