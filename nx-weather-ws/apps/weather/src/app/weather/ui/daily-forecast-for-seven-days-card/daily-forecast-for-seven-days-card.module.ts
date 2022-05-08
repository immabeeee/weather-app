import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSkeletonLoaderModule } from '@nx-weather-ws/ui-skeleton-loader';
import { DailyForecastForSevenDaysCardComponent } from './daily-forecast-for-seven-days-card.component';
import { WeatherCardModule } from '../weather-card/weather-card.module';

@NgModule({
    declarations: [DailyForecastForSevenDaysCardComponent],
    imports: [
        CommonModule, UiSkeletonLoaderModule, WeatherCardModule,
    ],
    providers: [],
    exports: [DailyForecastForSevenDaysCardComponent]
})
export class DailyForecastForSevenDaysCardModule { }
