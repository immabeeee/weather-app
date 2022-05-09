import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperModule } from './ui/card-wrapper/card-wrapper.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardWrapperModule],
  exports: [CardWrapperModule]
})
export class UiCardWrapperModule { }
