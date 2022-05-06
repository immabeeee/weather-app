import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "apps/weather/src/environments/environment";
import { delay } from "rxjs/operators";
import { WeatherDetails } from "./model/weather-details.view.model";

@Injectable()
export class WeatherRestService {
    constructor(private readonly httpClient: HttpClient) { }

    fetchWeatherDetails(city: string): Observable<WeatherDetails> {
        const path: string = '/data/2.5/weather'
        return this.httpClient.get<WeatherDetails>(`${environment.basePath}${path}?q=${city}&units=metric&appid=${environment.apiKey}`).pipe(delay(3000));
    }
}
