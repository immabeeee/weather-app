import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "apps/weather/src/environments/environment";
import { delay } from "rxjs/operators";
import { Coord, WeatherDetails } from "./model/weather-details.view.model";

@Injectable()
export class WeatherRestService {
    constructor(private readonly httpClient: HttpClient) { }

    public fetchWeatherDetails(city: string): Observable<WeatherDetails> {
        const path: string = '/data/2.5/weather'
        return this.httpClient.get<WeatherDetails>(`${environment.basePath}${path}?q=${city}&units=metric&appid=${environment.apiKey}`).pipe(delay(3000));
    }

    public fetchDailyForecastFor7Days(coord: Coord | null): Observable<any> {
        const path: string = '/data/2.5/onecall'
        return this.httpClient.get<any>(`${environment.basePath}${path}?lat=${coord?.lat}&lon=${coord?.lon}&units=metric&appid=${environment.apiKey}`).pipe(delay(3000));
    }
}
