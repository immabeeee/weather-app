import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CARD_TOKEN } from '@nx-weather-ws/ui-card-wrapper';
import { Card } from '../../../../../../../libs/ui-card-wrapper/src/lib/data-access/model/card.interface';
import { SimpleWeatherDetails } from '../../data-access/model/weather-details.view.model';

@Component({
  selector: 'nx-weather-ws-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CARD_TOKEN,
      useExisting: WeatherCardComponent
    }
  ]
})
export class WeatherCardComponent implements OnInit, Card {
  @Output() public refreshData = new EventEmitter<void>();
  @Input() details: SimpleWeatherDetails | null = null;
  @Input() loading: boolean = false;
  @Input() error: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  handleRefreshData(): void {
    this.refreshData.emit();
  }
}
