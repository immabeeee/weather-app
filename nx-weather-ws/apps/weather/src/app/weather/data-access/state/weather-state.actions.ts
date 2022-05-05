import { createAction, props } from '@ngrx/store';

export const fetchWeatherDetails = createAction(
  '[WeatherState/API] Fetch Weather Details',
  props<{ city: string }>()
);

export const fetchWeatherDetailsSuccess = createAction(
  '[WeatherState/API] Fetch Weather Details Success',
  props<{ details: any }>()
);

export const fetchWeatherDetailsFailure = createAction(
  '[WeatherState/API] Fetch Weather Details Failure',
  props<{ error: string }>()
);

