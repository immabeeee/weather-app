import { createFeatureSelector, createSelector } from '@ngrx/store';
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
