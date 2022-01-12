import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5-main',
  templateUrl: './section5-main.component.html',
  styleUrls: ['./section5-main.component.css']
})
export class Section5MainComponent implements OnInit {

  car1 = {
    name: "bmw",
    colour: "red"
  }

  number = 23;

  constructor() { }

  ngOnInit(): void {
  }

  incrementNumber(){
    this.number++;
  } 

  /*  
  this method ^ 'incrementNumber()' is triggered when the event 'incrementExternalVarEvent' happens. 
  Check html tempplate
  */

  incrementNumberBy(numberToIncrementBy: number){
    this.number += numberToIncrementBy;
  }
}
