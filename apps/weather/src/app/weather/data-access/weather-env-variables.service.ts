import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, take, tap } from "rxjs/operators";
import { environment } from "apps/weather/src/environments/environment";

interface WeatherEnvVariables {
    url: string;
    apiKey: string;
}

@Injectable()
export class WeatherEnvVariablesService {
    private readonly urlBackendKey = 'url_backend';
    private readonly apiKeyKey = 'api_key';

    constructor(private readonly httpClient: HttpClient) {
        this.setWeatherEnvVariables();
    }

    public setWeatherEnvVariables(): void {
        if (environment.production) {
            this.httpClient.get<Response>(window.location.origin + '/backend')
                .pipe(map((response: Response) => response.json()), take(1)).subscribe((variables: any) => {
                    sessionStorage.setItem(this.urlBackendKey, variables.url);
                    sessionStorage.setItem(this.apiKeyKey, variables.apiKey);
                });
        }
    }

    public getUrlBackend(): string | null {
        return environment.production ? sessionStorage.getItem(this.urlBackendKey) : environment.basePath;
    }

    public getApiKey(): string | null {
        return environment.production ? sessionStorage.getItem(this.apiKeyKey) : environment.apiKey;
    }
}
