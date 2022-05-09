import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DailyForecastFor7DaysView, SimpleDailyForecastFor7DaysView } from "./model/daily-forecast.model";
import { SimpleWeatherDetailsView, WeatherDetailsView } from "./model/weather-details.view.model";
import * as WeatherStateActions from './state/weather-state.actions';
import * as WeatherStateSelectors from './state/weather-state.selectors';
import { WeatherDetailsTranslatorService } from "./weather-details-translator.service";

@Injectable()
export class WeatherFacadeService {
    constructor(private store: Store, private weatherDetailsTranslatorService: WeatherDetailsTranslatorService) { }

    getWeatherView$(): Observable<WeatherDetailsView> {
        return this.store.pipe(select(WeatherStateSelectors.selectWeatherDetailsView));
    }

    getSimpleWeatherView$(): Observable<SimpleWeatherDetailsView> {
        return this.store.pipe(select(WeatherStateSelectors.selectWeatherDetailsView)).pipe(map((view: WeatherDetailsView) => {
            return {
                ...view,
                details: this.weatherDetailsTranslatorService.translateWeatherDetailsToSimpleWeatherDetails(view.details)
            }
        }));
    }

    getDailyForecastFor7DaysView$(): Observable<DailyForecastFor7DaysView> {
        return this.store.pipe(select(WeatherStateSelectors.selectDailyForecastFor7DaysView));
    }

    getSimpleDailyForecastFor7DaysView$(): Observable<SimpleDailyForecastFor7DaysView> {
        return this.store.pipe(select(WeatherStateSelectors.selectDailyForecastFor7DaysView)).pipe(map((view: DailyForecastFor7DaysView) => {
            return {
                daily: this.weatherDetailsTranslatorService.translateDailyForecastDetailsToSimpleWeatherDetails(view.forecast?.daily),
                hourly: this.weatherDetailsTranslatorService.translateHourlyForecastDetailsToSimpleWeatherDetails(view.forecast?.hourly),
                isLoading: view.isLoading,
                error: view.error
            }
        }));
    }

    getSelectedCity$(): Observable<string | null> {
        return this.store.pipe(select(WeatherStateSelectors.selectSelectedCity));
    }

    fetchWeather(city: string): void {
        this.store.dispatch(WeatherStateActions.fetchWeatherDetails({ city }))
    }

    fetchDailyForecastFor7Days(): void {
        this.store.dispatch(WeatherStateActions.fetchDailyForecastFor7Days())
    }
}
