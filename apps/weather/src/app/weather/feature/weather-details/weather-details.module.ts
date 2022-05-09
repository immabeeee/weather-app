import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherSearchFormService } from '../../data-access/weather-form.service';
import { WeatherCardModule } from '../../ui/weather-card/weather-card.module';
import { WeatherDetailsRoutingModule } from './weather-details-routing.module';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherCitySelectModule } from '../weather-city-select/weather-city-select.module';
import { UiCardWrapperModule } from '@nx-weather-ws/ui-card-wrapper';
import { ForecastCardModule } from '../../ui/forecast-card/forecast-card.module';

@NgModule({
    declarations: [WeatherDetailsComponent],
    imports: [
        CommonModule,
        FormsModule,
        WeatherDetailsRoutingModule,
        WeatherCardModule,
        ForecastCardModule,
        ReactiveFormsModule,
        WeatherCitySelectModule,
        UiCardWrapperModule
    ],
    providers: [WeatherSearchFormService],
    bootstrap: [],
})
export class WeatherDetailsPageModule { }
