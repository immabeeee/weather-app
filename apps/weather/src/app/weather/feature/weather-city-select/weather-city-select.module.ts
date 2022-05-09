import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from '@nx-weather-ws/ui-button'
import { WeatherCitySelectComponent } from './weather-city-select.component';

@NgModule({
    declarations: [WeatherCitySelectComponent],
    imports: [
        CommonModule,
        UiButtonModule
    ],
    providers: [],
    bootstrap: [],
    exports: [WeatherCitySelectComponent]
})
export class WeatherCitySelectModule { }
