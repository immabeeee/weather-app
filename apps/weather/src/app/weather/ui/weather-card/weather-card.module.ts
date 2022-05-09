import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card.component';
import { UiSkeletonLoaderModule } from '@nx-weather-ws/ui-skeleton-loader';

@NgModule({
    declarations: [WeatherCardComponent],
    imports: [
        CommonModule, UiSkeletonLoaderModule
    ],
    providers: [],
    exports: [WeatherCardComponent]
})
export class WeatherCardModule { }
