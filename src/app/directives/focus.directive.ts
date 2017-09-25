import { Directive, Input, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {

  @Input() focus = false;

  constructor( @Inject(ElementRef ) private element: ElementRef ) {

  }

  ngAfterContentChecked(): void {
    this.setElementFocus();
  }

  setElementFocus(): void {
    if (this.focus) {
      this.element.nativeElement.focus();
    }
  }

}
