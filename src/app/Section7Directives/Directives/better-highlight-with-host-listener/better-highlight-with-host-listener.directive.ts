import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightWithHostListener]'
})
export class BetterHighlightWithHostListenerDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseOver(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }
  
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
  }

}
// The event needs to be defined in @HostListener('theEvent')
// The method name can be called whatever.
