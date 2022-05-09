import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonModule } from '@nx-weather-ws/ui-button'
import { CardWrapperComponent } from './card-wrapper.component';
import { UiSkeletonLoaderModule } from '@nx-weather-ws/ui-skeleton-loader';

@NgModule({
    declarations: [CardWrapperComponent],
    imports: [
        CommonModule, UiSkeletonLoaderModule, UiButtonModule
    ],
    providers: [],
    exports: [CardWrapperComponent]
})
export class CardWrapperModule { }
