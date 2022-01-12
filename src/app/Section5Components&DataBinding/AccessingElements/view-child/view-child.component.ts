import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('inputElement', {static: true}) inputElement: ElementRef;
  valueToDisplay;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.valueToDisplay = this.inputElement.nativeElement.value;
  }
}
