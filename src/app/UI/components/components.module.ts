import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './card/card.component';

@NgModule({
  declarations: [CardsComponent],
  exports: [CardsComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
