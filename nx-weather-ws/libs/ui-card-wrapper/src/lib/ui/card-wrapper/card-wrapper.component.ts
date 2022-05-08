import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit } from '@angular/core';
import { Card } from '../../data-access/model/card.interface';
import { CARD_TOKEN } from '../../utils/token/card.token';

@Component({
  selector: 'nx-weather-ws-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardWrapperComponent implements OnInit {
  public readonly refreshButtonName: string = 'refresh';

  @ContentChild(CARD_TOKEN, { static: true }) weatherCard!: Card;
  @Input() title!: string;
  @Input() isLoading!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  handleRefresh(): void {
    this.weatherCard.handleRefreshData();
  }
}
