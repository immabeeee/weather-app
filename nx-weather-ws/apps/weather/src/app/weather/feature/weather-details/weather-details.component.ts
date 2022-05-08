import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { publishReplay, refCount, tap } from 'rxjs/operators';
import { SimpleWeatherDetailsView, } from '../../data-access/model/weather-details.view.model';
import { WeatherFacadeService } from '../../data-access/weather-facade.service';
import { WeatherSearchFormService } from '../../data-access/weather-form.service';
import * as testData from '../../data-access/test-data/test-data';
import { SimpleDailyForecastFor7DaysView } from '../../data-access/model/daily-forecast.model';

@Component({
  selector: 'nx-weather-ws-weather-details-component',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {
  public readonly cities: string[] = testData.availableCities;

  public getSimpleWeatherView$: Observable<SimpleWeatherDetailsView> =
    this.weatherFacadeService.getSimpleWeatherView$();
  public getSimpleDailyForecastFor7DaysView$: Observable<SimpleDailyForecastFor7DaysView> =
    this.weatherFacadeService.getSimpleDailyForecastFor7DaysView$();
  public getSelectedCity$: Observable<string | null> =
    this.weatherFacadeService.getSelectedCity$().pipe(publishReplay(), refCount());
  public searchForm!: FormGroup;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private readonly weatherFacadeService: WeatherFacadeService,
    private readonly weatherSearchFormService: WeatherSearchFormService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.weatherSearchFormService.createEmptyForm();
    this.fetchWeatherDetails(this.cities[0]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleSelectedCity(city: string): void {
    this.fetchWeatherDetails(city);
  }

  public fetchWeatherDetails(city: string): void {
    this.weatherFacadeService.fetchWeather(city)
  }

  public fetchDailyForecastFor7Days(): void {
    this.weatherFacadeService.fetchDailyForecastFor7Days()
  }
}
