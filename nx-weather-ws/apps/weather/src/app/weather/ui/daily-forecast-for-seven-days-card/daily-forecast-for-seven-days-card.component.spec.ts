import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastForSevenDaysCardComponent } from './daily-forecast-for-seven-days-card.component';

describe('DailyForecastForSevenDaysCardComponent', () => {
  let component: DailyForecastForSevenDaysCardComponent;
  let fixture: ComponentFixture<DailyForecastForSevenDaysCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyForecastForSevenDaysCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForecastForSevenDaysCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
