import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DailyForecastFor7DaysView } from '../model/daily-forecast.model';
import { WeatherDetailsView } from '../model/weather-details.view.model';
import {
  WEATHER_STATE_FEATURE_KEY,
  State,
  WeatherStateEntity,
} from './weather-state.reducer';

export const selectWeatherStateState = createFeatureSelector<State>(
  WEATHER_STATE_FEATURE_KEY
);

export const selectWeatherDetailsView = createSelector<WeatherStateEntity, State, WeatherDetailsView>(
  selectWeatherStateState,
  (state: State) => {
    return {
      details: state.weatherDetails,
      isLoading: state.weatherDetailsLoading,
      error: state.weatherDetailsError
    }
  }
);

export const selectDailyForecastFor7DaysView = createSelector<WeatherStateEntity, State, DailyForecastFor7DaysView>(
  selectWeatherStateState,
  (state: State) => {
    return {
      forecast: state.dailyForecastFor7Days,
      isLoading: state.dailyForecastFor7DaysLoading,
      error: state.dailyForecastFor7DaysError
    }
  }
);

export const selectSelectedCity = createSelector<WeatherStateEntity, State, string | null>(
  selectWeatherStateState,
  (state: State) => {
    return state.selectedCity
  }
);
