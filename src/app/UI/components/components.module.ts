import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [CardsComponent, LoadingComponent],
  exports: [CardsComponent, LoadingComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
