import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red')
  }

}


// this way is better to do. The other way, it directly accesses elements which might lead
// to some problems in some cases. 

// theres other stuff apart from 'setStyle'. Check them out -> this.renderer. ...