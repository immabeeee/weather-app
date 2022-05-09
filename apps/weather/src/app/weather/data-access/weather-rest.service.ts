import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "apps/weather/src/environments/environment";
import { delay } from "rxjs/operators";
import { Coord, WeatherDetails } from "./model/weather-details.view.model";
import { WeatherEnvVariablesService } from "./weather-env-variables.service";

@Injectable()
export class WeatherRestService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly weatherEnvVariablesService: WeatherEnvVariablesService
    ) { }

    public fetchWeatherDetails(city: string): Observable<WeatherDetails> {
        const path: string = '/data/2.5/weather'
        return this.httpClient.get<WeatherDetails>(`${this.weatherEnvVariablesService.getUrlBackend()}${path}?q=${city}&units=metric&appid=${this.weatherEnvVariablesService.getApiKey()}`).pipe(delay(3000));
    }

    public fetchDailyForecastFor7Days(coord: Coord | null): Observable<any> {
        const path: string = '/data/2.5/onecall'
        return this.httpClient.get<any>(`${this.weatherEnvVariablesService.getUrlBackend()}${path}?lat=${coord?.lat}&lon=${coord?.lon}&units=metric&appid=${this.weatherEnvVariablesService.getApiKey()}`).pipe(delay(3000));
    }

}
