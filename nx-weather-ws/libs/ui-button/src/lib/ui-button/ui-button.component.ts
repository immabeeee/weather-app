import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-weather-ws-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent implements OnInit {
  @Input() iconName: string | null = null;
  @Input() name: string | null = null;
  @Input() label: string | null = null;
  @Input() isActive: boolean = false;
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
