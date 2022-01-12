import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
}

// This is not the best way to do it as it directly accesses the element which might lead
// to some problems in some cases. 
// Better way to do it is using 'renderer2' in the better-highlight directive