import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherSearchFormService } from '../../data-access/weather-form.service';
import { WeatherCardModule } from '../../ui/weather-card/weather-card.module';
import { WeatherListPageRoutingModule } from './weather-details-routing.module';
import { WeatherDetailsPage } from './weather-details.page';
import { WeatherCitySelectModule } from '../weather-city-select/weather-city-select.module';

@NgModule({
    declarations: [WeatherDetailsPage],
    imports: [
        CommonModule,
        FormsModule,
        WeatherListPageRoutingModule,
        WeatherCardModule,
        ReactiveFormsModule,
        WeatherCitySelectModule
    ],
    providers: [WeatherSearchFormService],
    bootstrap: [],
})
export class WeatherListPageModule { }
