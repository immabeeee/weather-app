import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Coord, WeatherDetails } from '../model/weather-details.view.model';

import * as WeatherStateActions from './weather-state.actions';

export const WEATHER_STATE_FEATURE_KEY = 'weatherState';

export interface State extends EntityState<WeatherStateEntity> {
  selectedCity: string | null;
  selectedCityCoord: Coord | null;

  weatherDetails: WeatherDetails | null;
  weatherDetailsLoading: boolean;
  weatherDetailsError: string | null;

  dailyForecastFor7Days: any | null;
  dailyForecastFor7DaysLoading: boolean;
  dailyForecastFor7DaysError: string | null;
}

export interface WeatherStatePartialState {
  readonly [WEATHER_STATE_FEATURE_KEY]: State;
}

export interface WeatherStateEntity { }

export const weatherStateAdapter: EntityAdapter<WeatherStateEntity> =
  createEntityAdapter<WeatherStateEntity>();

export const initialState: State = weatherStateAdapter.getInitialState({
  selectedCity: null,
  selectedCityCoord: null,

  weatherDetails: null,
  weatherDetailsLoading: false,
  weatherDetailsError: null,

  dailyForecastFor7Days: null,
  dailyForecastFor7DaysLoading: false,
  dailyForecastFor7DaysError: null
});

const weatherStateReducer = createReducer(
  initialState,
  on(WeatherStateActions.fetchWeatherDetails, (state, action) => ({
    ...state,
    selectedCity: action.city ? action.city : state.selectedCity,
    weatherDetails: null,
    weatherDetailsLoading: true,
    weatherDetailsError: null,
  })),
  on(WeatherStateActions.fetchWeatherDetailsSuccess, (state, action) => ({
    ...state,
    selectedCityCoord: action.details.coord,
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

  on(WeatherStateActions.fetchDailyForecastFor7Days, (state, action) => ({
    ...state,
    dailyForecastFor7Days: null,
    dailyForecastFor7DaysLoading: true,
    dailyForecastFor7DaysError: null,
  })),
  on(WeatherStateActions.fetchDailyForecastFor7DaysSuccess, (state, action) => ({
    ...state,
    dailyForecastFor7Days: action.details,
    dailyForecastFor7DaysLoading: false,
    dailyForecastFor7DaysError: null,
  })),
  on(WeatherStateActions.fetchDailyForecastFor7DaysFailure, (state, action) => ({
    ...state,
    dailyForecastFor7Days: null,
    dailyForecastFor7DaysLoading: false,
    dailyForecastFor7DaysError: action.error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return weatherStateReducer(state, action);
}
