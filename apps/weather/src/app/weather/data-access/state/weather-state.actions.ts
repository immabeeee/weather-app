import { createAction, props } from '@ngrx/store';
import { WeatherDetails } from '../model/weather-details.view.model';

export const fetchWeatherDetails = createAction(
  '[WeatherState/API] Fetch Weather Details',
  props<{ city: string }>()
);

export const fetchWeatherDetailsSuccess = createAction(
  '[WeatherState/API] Fetch Weather Details Success',
  props<{ details: WeatherDetails }>()
);

export const fetchWeatherDetailsFailure = createAction(
  '[WeatherState/API] Fetch Weather Details Failure',
  props<{ error: string }>()
);

export const fetchDailyForecastFor7Days = createAction(
  '[WeatherState/API] Fetch Daily Forecast For 7 days'
);

export const fetchDailyForecastFor7DaysSuccess = createAction(
  '[WeatherState/API] Fetch Daily Forecast For 7 days Success',
  props<{ details: any }>()
);

export const fetchDailyForecastFor7DaysFailure = createAction(
  '[WeatherState/API] Fetch Daily Forecast For 7 days Failure',
  props<{ error: string }>()
);

