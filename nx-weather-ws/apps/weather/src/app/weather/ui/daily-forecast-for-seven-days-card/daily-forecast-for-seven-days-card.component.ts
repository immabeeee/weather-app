import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card, CARD_TOKEN } from '@nx-weather-ws/ui-card-wrapper';
import { SimpleWeatherDetails } from '../../data-access/model/weather-details.view.model';

@Component({
  selector: 'nx-weather-ws-daily-forecast-for-seven-days-card',
  templateUrl: './daily-forecast-for-seven-days-card.component.html',
  styleUrls: ['./daily-forecast-for-seven-days-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CARD_TOKEN,
      useExisting: DailyForecastForSevenDaysCardComponent
    }
  ]
})
export class DailyForecastForSevenDaysCardComponent implements OnInit, Card {
  @Output() public refreshData = new EventEmitter<void>();

  @Input() forecasts: SimpleWeatherDetails[] | null = null;
  @Input() loading: boolean = false;
  @Input() error: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public handleRefreshData() {
    this.refreshData.emit();
  };
}
