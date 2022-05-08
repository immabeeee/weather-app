import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nx-weather-ws-weather-city-select',
  templateUrl: './weather-city-select.component.html',
  styleUrls: ['./weather-city-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCitySelectComponent implements OnInit {
  @Output() public selectCity = new EventEmitter<string>();
  @Input() public availableCities: string[] = [];
  @Input() public selectedCity: any;

  public isSelectDropdownVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSelectDropdown(event?: MouseEvent): void {
    event && event.stopPropagation();

    this.isSelectDropdownVisible = !this.isSelectDropdownVisible;
  }

  public handleSelectedCity(event: MouseEvent, city: string): void {
    event.stopPropagation();

    this.selectCity.emit(city)
    this.toggleSelectDropdown();
  }
}
