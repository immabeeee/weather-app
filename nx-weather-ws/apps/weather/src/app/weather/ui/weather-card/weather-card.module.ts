import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card.component';
import { SkeletonLoaderModule } from '../../../shared/ui/skeleton-loader/skeleton-loader.module';

@NgModule({
    declarations: [WeatherCardComponent],
    imports: [
        CommonModule, SkeletonLoaderModule
    ],
    providers: [],
    exports: [WeatherCardComponent]
})
export class WeatherCardModule { }
