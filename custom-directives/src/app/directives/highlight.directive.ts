import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',

  // Will be appllied when the host element (ie binded html) is clicked
  host: {
    '(click)': 'applyLogic()',
  },
})
export class HighlightDirective {
  // get access to the div element
  private el: ElementRef | undefined;

  @Input() number = 0;
  @Input() divisibleBy = 1;

  // pass to constructor to be accessible
  constructor(el: ElementRef) {
    this.el = el;
  }

  applyLogic() {
    if (this.number % this.divisibleBy === 0) {
      if (this.el) this.el.nativeElement.style.color = 'green';
    } else {
      if (this.el) this.el.nativeElement.style.color = 'red';
    }
  }
}
