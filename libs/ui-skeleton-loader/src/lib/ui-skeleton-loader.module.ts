import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderModule } from './ui/skeleton-loader/skeleton-loader.module';

@NgModule({
  imports: [CommonModule, SkeletonLoaderModule],
  exports: [SkeletonLoaderModule]
})
export class UiSkeletonLoaderModule {}
