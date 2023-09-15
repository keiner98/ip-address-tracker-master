import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [CardsComponent, LoadingComponent, ContentCardComponent],
  exports: [CardsComponent, LoadingComponent, ContentCardComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
