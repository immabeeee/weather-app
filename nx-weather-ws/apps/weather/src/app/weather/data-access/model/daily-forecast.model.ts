import { SimpleWeatherDetails, Weather } from "./weather-details.view.model";

export interface DailyForecastFor7DaysView {
    forecast: DailyForecastFor7Days | null;
    isLoading: boolean;
    error: string | null;
}

export interface SimpleDailyForecastFor7DaysView {
    details: SimpleWeatherDetails[] | null;
    isLoading: boolean;
    error: string | null;
}

export interface DailyForecast {
    dt: number;
    date: Date;
    temp: Temp;
    weather: Weather[];
}

export interface DailyForecastFor7Days {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    minutely: Minutely[];
    hourly: Hourly[];
    daily: Daily[];
}

export interface Current {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
}

export interface Minutely {
    dt: number;
    precipitation: number;
}

export interface Hourly {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    pop: number;
}

export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}


export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    uvi: number;
    rain?: number;
}




