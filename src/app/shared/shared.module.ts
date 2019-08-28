import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HighlightDirective} from './highlight.directive';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HighlightDirective,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    SearchComponent
  ]
})
export class SharedModule { }
