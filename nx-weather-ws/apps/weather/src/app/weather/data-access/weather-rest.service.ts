import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { environment } from "apps/weather/src/environments/environment";

@Injectable()
export class WeatherRestService {
    constructor(private readonly httpClient: HttpClient) { }

    fetchWeatherDetails(city: string): Observable<any> {
        const path: string = '/data/2.5/weather'
        return this.httpClient.get<any>(`${environment.basePath}${path}?q=${city}&appid=${environment.apiKey}`);
    }
}
