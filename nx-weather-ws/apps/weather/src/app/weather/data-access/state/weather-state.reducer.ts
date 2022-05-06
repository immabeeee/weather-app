import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { WeatherDetails } from '../model/weather-details.view.model';

import * as WeatherStateActions from './weather-state.actions';

export const WEATHER_STATE_FEATURE_KEY = 'weatherState';

export interface State extends EntityState<WeatherStateEntity> {
  selectedCity: string | null;

  weatherDetails: WeatherDetails | null;
  weatherDetailsLoading: boolean;
  weatherDetailsError: string | null;
}

export interface WeatherStatePartialState {
  readonly [WEATHER_STATE_FEATURE_KEY]: State;
}

export interface WeatherStateEntity { }

export const weatherStateAdapter: EntityAdapter<WeatherStateEntity> =
  createEntityAdapter<WeatherStateEntity>();

export const initialState: State = weatherStateAdapter.getInitialState({
  selectedCity: null,

  weatherDetails: null,
  weatherDetailsLoading: false,
  weatherDetailsError: null,
});

const weatherStateReducer = createReducer(
  initialState,
  on(WeatherStateActions.fetchWeatherDetails, (state, action) => ({
    ...state,
    selectedCity: action.city,
    weatherDetails: null,
    weatherDetailsLoading: true,
    weatherDetailsError: null,
  })),
  on(WeatherStateActions.fetchWeatherDetailsSuccess, (state, action) => ({
    ...state,
    weatherDetails: action.details,
    weatherDetailsLoading: false,
    weatherDetailsError: null,
  })),
  on(WeatherStateActions.fetchWeatherDetailsFailure, (state, action) => ({
    ...state,
    weatherDetails: null,
    weatherDetailsLoading: false,
    weatherDetailsError: action.error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return weatherStateReducer(state, action);
}
