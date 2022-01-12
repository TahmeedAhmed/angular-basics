import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.value = this.inputValue;
  }

  @Input() inputValue = 0;  // 0 is default value
  value: number;


}

// this is actually from Section 7 video 102
