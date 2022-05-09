import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSkeletonLoaderModule } from '@nx-weather-ws/ui-skeleton-loader';
import { ForecastCardComponent } from './forecast-card.component';
import { WeatherCardModule } from '../weather-card/weather-card.module';

@NgModule({
    declarations: [ForecastCardComponent],
    imports: [
        CommonModule, UiSkeletonLoaderModule, WeatherCardModule,
    ],
    providers: [],
    exports: [ForecastCardComponent]
})
export class ForecastCardModule { }
