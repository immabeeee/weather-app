import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { WeatherDetailsView } from "./model/weather-details.view.model";
import * as WeatherStateActions from './state/weather-state.actions';
import * as WeatherStateSelectors from './state/weather-state.selectors';

@Injectable()
export class WeatherFacadeService {
    constructor(private store: Store) { }

    getWeatherView$(): Observable<WeatherDetailsView> {
        return this.store.pipe(select(WeatherStateSelectors.selectWeatherDetailsView));
    }

    fetchWeather(city: string): void {
        this.store.dispatch(WeatherStateActions.fetchWeatherDetails({ city }))
    }
}
