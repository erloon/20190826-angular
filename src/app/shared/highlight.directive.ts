import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[apHighlight]'
})
export class HighlightDirective {

  @Input() apHighlight;
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor() { }

  @HostListener('mouseover')
  mouseOver() {
      this.bgColor = this.apHighlight || 'yellow';
  }

  @HostListener('mouseout')
  mouseOut() {
    this.bgColor = '';
  }
}
