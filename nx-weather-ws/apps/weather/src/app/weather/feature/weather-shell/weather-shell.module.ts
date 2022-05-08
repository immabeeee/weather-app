import { NgModule } from '@angular/core';
import { WeatherShellRoutingModule } from './weather-shell-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWeatherState from '../../data-access/state/weather-state.reducer';
import { WeatherStateEffects } from '../../data-access/state/weather-state.effects';
import { WeatherFacadeService } from '../../data-access/weather-facade.service';
import { WeatherRestService } from '../../data-access/weather-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsTranslatorService } from '../../data-access/weather-details-translator.service';

@NgModule({
    imports: [
        HttpClientModule,
        WeatherShellRoutingModule,
        StoreModule.forFeature(
            fromWeatherState.WEATHER_STATE_FEATURE_KEY,
            fromWeatherState.reducer
        ),
        EffectsModule.forFeature([WeatherStateEffects]),
    ],
    providers: [WeatherFacadeService, WeatherRestService, WeatherDetailsTranslatorService],
})
export class WeatherShellModule { }
