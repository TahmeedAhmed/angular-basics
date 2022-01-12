import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPropertyBindingDirective]'
})
export class PropertyBindingDirectiveDirective implements OnInit{

  constructor(private elemntRef: ElementRef) { }

  
  @Input() highlightColour: string;


  ngOnInit(){
    this.elemntRef.nativeElement.style.backgroundColor = this.highlightColour;
  }

  // illustrated property binding with the basic highlight way - which should be avoided
  // better to use renderer2, or host binding


}
