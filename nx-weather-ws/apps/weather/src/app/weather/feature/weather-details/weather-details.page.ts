import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDetailsView } from '../../data-access/model/weather-details.view.model';
import { WeatherFacadeService } from '../../data-access/weather-facade.service';

@Component({
  selector: 'nx-weather-ws-weather-details-page',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss']
})
export class WeatherDetailsPage implements OnInit {
  public getWeatherView$: Observable<WeatherDetailsView> = this.weatherFacadeService.getWeatherView$();

  private readonly city: string = 'city';

  constructor(private readonly weatherFacadeService: WeatherFacadeService) { }

  ngOnInit(): void {
    this.fetchWeatherDetails();
  }

  private fetchWeatherDetails(): void {
    this.weatherFacadeService.fetchWeather(this.city)
  }
}
