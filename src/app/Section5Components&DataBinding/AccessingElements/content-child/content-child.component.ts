import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  @ContentChild('sentence') sentence: ElementRef

  content = "";

  constructor() { }
  ngOnInit(): void {
  }

  displayContent(){
    this.content = this.sentence.nativeElement.textContent;
  }

}

/*
  @ContentChild can only be used on elements inside <ng-content>

  So what we did was, from parent component, we rendered this component. And inside the tags, 
  we put some html code there, with a local reference.  
  We displayed this html code in this child component template file using <ng-content>.
  And in this typescript file, we are able to access the html code who have a local reference to it,
  by using @ContentChild!
*/
