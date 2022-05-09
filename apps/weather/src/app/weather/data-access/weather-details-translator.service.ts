import { Injectable } from "@angular/core";
import { Daily, DailyForecastFor7Days, Hourly } from "./model/daily-forecast.model";
import { SimpleWeatherDetails, WeatherDetails } from "./model/weather-details.view.model";

@Injectable()
export class WeatherDetailsTranslatorService {
    constructor() { }

    public translateWeatherDetailsToSimpleWeatherDetails(details: WeatherDetails | null): SimpleWeatherDetails | null {
        if (!details) { return null };

        const { temp_min, temp_max, temp } = details.main || { temp_min: null, temp_max: null, temp: null }
        const { dt, weather } = details;

        return {
            temp,
            temp_min,
            temp_max,
            timestamp: dt,
            weather
        }
    }

    public translateDailyForecastDetailsToSimpleWeatherDetails(daily: Daily[] | undefined): SimpleWeatherDetails[] | null {
        if (!daily) { return null };

        return daily.map((d: Daily) => {
            return {
                timestamp: d.dt,
                temp_min: d.temp.min,
                temp_max: d.temp.max,
                temp: d.temp.eve,
                weather: d.weather
            }
        })
    }

    public translateHourlyForecastDetailsToSimpleWeatherDetails(hourly: Hourly[] | undefined): SimpleWeatherDetails[] | null {
        if (!hourly) { return null };

        return hourly.map((d: Hourly) => {
            return {
                timestamp: d.dt,
                temp_min: null,
                temp_max: null,
                temp: d.temp,
                weather: d.weather
            }
        })
    }
}
