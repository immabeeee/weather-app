import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card, CARD_TOKEN } from '@nx-weather-ws/ui-card-wrapper';
import { SimpleWeatherDetails } from '../../data-access/model/weather-details.view.model';

@Component({
  selector: 'nx-weather-ws-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CARD_TOKEN,
      useExisting: ForecastCardComponent
    }
  ]
})
export class ForecastCardComponent implements OnInit, Card {
  @Output() public refreshData = new EventEmitter<void>();

  @Input() forecasts: SimpleWeatherDetails[] | null = null;
  @Input() loading: boolean = false;
  @Input() error: string | null = null;
  @Input() title!: string;
  @Input() description!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public handleRefreshData() {
    this.refreshData.emit();
  };
}
