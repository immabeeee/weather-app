import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { WeatherDetailsView } from '../../data-access/model/weather-details.view.model';
import { WeatherFacadeService } from '../../data-access/weather-facade.service';
import { WeatherSearchFormService } from '../../data-access/weather-form.service';

@Component({
  selector: 'nx-weather-ws-weather-details-page',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss']
})
export class WeatherDetailsPage implements OnInit, OnDestroy {
  public readonly cities: string[] = [
    'Kaczory',
    'Kalety',
    'Kalisz',
    'Kalisz Pomorski',
    'Kalwaria Zebrzydowska',
    'Kałuszyn',
    'Kamieniec Ząbkowicki',
    'Kamienna Góra',
    'Kamień Krajeński',
    'Kamień Pomorski',
    'Kamieńsk',
    'Kamionka',
    'Kańczuga',
    'Karczew',
    'Kargowa',
    'Karlino',
    'Karpacz',
    'Kartuzy',
    'Katowice',
    'Kazimierz Dolny',
    'Kazimierza Wielka',
    'Kąty Wrocławskie',
    'Kcynia',
    'Kędzierzyn-Koźle',
    'Kępice',
    'Kępno',
    'Kętrzyn',
    'Kęty',
    'Kielce',
    'Kietrz',
    'Kisielice',
    'Kleczew',
    'Kleszczele',
    'Klimontów',
    'Kluczbork',
    'Kłecko',
    'Kłobuck',
    'Kłodawa',
    'Kłodzko',
    'Knurów',
    'Knyszyn',
    'Kobylin',
    'Kobyłka',
    'Kock',
    'Kolbuszowa',
    'Kolno',
    'Kolonowskie',
    'Koluszki',
    'Kołaczyce',
    'Koło',
    'Kołobrzeg',
    'Koniecpol',
    'Konin',
    'Konstancin-Jeziorna',
    'Konstantynów Łódzki',
    'Końskie',
    'Koprzywnica',
    'Korfantów',
    'Koronowo',
    'Korsze',
    'Kosów Lacki',
    'Kostrzyn',
    'Kostrzyn nad Odrą',
    'Koszalin',
    'Koszyce',
    'Kościan',
    'Kościerzyna',
    'Kowal',
    'Kowalewo Pomorskie',
    'Kowary',
    'Koziegłowy',
    'Kozienice',
    'Koźmin Wielkopolski',
    'Koźminek',
    'Kożuchów',
    'Kórnik',
    'Krajenka',
    'Kraków',
    'Krapkowice',
    'Krasnobród',
    'Krasnystaw',
    'Kraśnik',
    'Krobia',
    'Krosno',
    'Krosno Odrzańskie',
    'Krośniewice',
    'Krotoszyn',
    'Kruszwica',
    'Krynica Morska',
    'Krynica-Zdrój',
    'Krynki',
    'Krzanowice',
    'Krzepice',
    'Krzeszowice',
    'Krzywiń',
    'Krzyż Wielkopolski',
    'Książ Wielkopolski',
    'Kudowa-Zdrój',
    'Kunów',
    'Kutno',
    'Kuźnia Raciborska',
    'Kwidzyn',
  ];

  public getWeatherView$: Observable<WeatherDetailsView> = this.weatherFacadeService.getWeatherView$();
  public getSelectedCity$: Observable<string | null> = this.weatherFacadeService.getSelectedCity$();
  public searchForm!: FormGroup;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private readonly weatherFacadeService: WeatherFacadeService,
    private readonly weatherSearchFormService: WeatherSearchFormService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.weatherSearchFormService.createEmptyForm();
    this.fetchWeatherDetails(this.cities[0]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public fetchWeatherDetails(city: string): void {
    this.weatherFacadeService.fetchWeather(city)
  }

  public handleSelectedCity(city: string): void {
    this.fetchWeatherDetails(city);
  }
}
