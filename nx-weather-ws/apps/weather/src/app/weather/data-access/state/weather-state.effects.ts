import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as WeatherStateActions from './weather-state.actions';
import { map, mergeMap, catchError, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { WeatherRestService } from '../weather-rest.service';
import { WeatherApiError } from '../model/weather-api.model';
import { Store } from '@ngrx/store';
import { State } from './weather-state.reducer';
import { Coord } from '../model/weather-details.view.model';

@Injectable()
export class WeatherStateEffects {

  fetchWeatherDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherStateActions.fetchWeatherDetails),
      mergeMap((action) => {
        return this.restService.fetchWeatherDetails(action.city)
          .pipe(
            switchMap(details => {
              return [
                (WeatherStateActions.fetchWeatherDetailsSuccess({ details })),
              ]
            }),
            catchError(({ error }: { error: WeatherApiError }) => of(
              (WeatherStateActions.fetchWeatherDetailsFailure({ error: error.message }))
            ))
          )
      }
      )
    )
  );

  fetchWeatherDetailsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherStateActions.fetchWeatherDetailsSuccess),
      mergeMap((action) => {
        return [
          (WeatherStateActions.fetchDailyForecastFor7Days())
        ]
      }
      )
    )
  );

  fetchDailyForecastFor7Days$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherStateActions.fetchDailyForecastFor7Days),
      withLatestFrom(this.store),
      mergeMap(([action, { weatherState }]) => {
        const coord: Coord | null = weatherState.selectedCityCoord;
        return this.restService.fetchDailyForecastFor7Days(coord)
          .pipe(
            map(details => (WeatherStateActions.fetchDailyForecastFor7DaysSuccess({ details }))),
            catchError(({ error }: { error: WeatherApiError }) => of(
              (WeatherStateActions.fetchDailyForecastFor7DaysFailure({ error: error.message }))
            ))
          )
      }
      )
    )
  );

  constructor(private readonly actions$: Actions, private store: Store<any>, private readonly restService: WeatherRestService) { }
}
