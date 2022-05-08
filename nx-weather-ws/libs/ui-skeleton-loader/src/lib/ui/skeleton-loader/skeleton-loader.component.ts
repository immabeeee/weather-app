import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-skeleton-loader',
    styleUrls: ['./skeleton-loader.component.scss'],
    templateUrl: './skeleton-loader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent implements OnInit {
    @Input() skeletonWidth!: number;
    @Input() skeletonHeight!: number;
    @Input() isCircle: boolean = false;

    constructor() { }

    ngOnInit() {
    }
}