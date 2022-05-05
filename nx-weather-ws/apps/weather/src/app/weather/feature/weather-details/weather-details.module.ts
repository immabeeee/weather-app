import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeatherListPageRoutingModule } from './weather-details-routing.module';
import { WeatherDetailsPage } from './weather-details.page';

@NgModule({
    declarations: [WeatherDetailsPage],
    imports: [CommonModule, WeatherListPageRoutingModule],
    providers: [],
    bootstrap: [],
})
export class WeatherListPageModule { }
