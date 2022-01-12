import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent"

  constructor() { }

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'pink';
  }
  
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'transparent';
  }
}

// no renderer2 needed !

// @HostBinding('property') -> doesnt need to be just style. Can be any other properties 
// the elment has