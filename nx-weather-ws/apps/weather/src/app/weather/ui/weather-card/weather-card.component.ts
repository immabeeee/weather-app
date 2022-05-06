import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherDetails } from '../../data-access/model/weather-details.view.model';

@Component({
  selector: 'nx-weather-ws-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCardComponent implements OnInit {
  @Input() details!: WeatherDetails | null;
  @Input() loading: boolean = false;
  @Input() error: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
