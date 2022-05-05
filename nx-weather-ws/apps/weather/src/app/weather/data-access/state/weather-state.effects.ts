import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as WeatherStateActions from './weather-state.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { WeatherRestService } from '../weather-rest.service';
import { WeatherApiError } from '../model/weather-api.model';

@Injectable()
export class WeatherStateEffects {

  fetchWeatherDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherStateActions.fetchWeatherDetails),
      mergeMap((action) => this.restService.fetchWeatherDetails(action.city)
        .pipe(
          map(details => (WeatherStateActions.fetchWeatherDetailsSuccess({ details }))),
          catchError(({ error }: { error: WeatherApiError }) => of(
            (WeatherStateActions.fetchWeatherDetailsFailure({ error: error.message }))
          ))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly restService: WeatherRestService) { }
}
