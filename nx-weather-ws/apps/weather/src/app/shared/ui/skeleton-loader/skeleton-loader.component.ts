import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-skeleton-loader',
    styleUrls: ['./skeleton-loader.component.scss'],
    templateUrl: './skeleton-loader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent implements OnInit {
    private readonly defaultBackgroudColor: string = '#efefef';
    private readonly defaultSliderColor: string = '#d9d9d9';

    @Input() skeletonWidth!: number;
    @Input() skeletonHeight!: number;
    @Input() backgroundColor: string = this.defaultBackgroudColor;
    @Input() sliderColor: string = this.defaultSliderColor;
    @Input() isCircle: boolean = false;

    constructor() { }

    ngOnInit() {
    }
}