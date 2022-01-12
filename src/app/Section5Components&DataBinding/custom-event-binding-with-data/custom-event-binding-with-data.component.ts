import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding-with-data',
  templateUrl: './custom-event-binding-with-data.component.html',
  styleUrls: ['./custom-event-binding-with-data.component.css']
})
export class CustomEventBindingWithDataComponent implements OnInit {

  @Output() incrementExternalNumberEventBy = new EventEmitter<number>();
  answer;

  constructor() { }

  ngOnInit(): void {
  }
  onType(answer: string){
    this.answer = answer;
  }

  buttonClicked(){
    var numberToIncrementBy = parseInt(this.answer)
    this.incrementExternalNumberEventBy.emit(numberToIncrementBy);
  }
}

/*
  @Output() incrementExternalNumberEventBy = new EventEmitter<number>();
  Here we put 'number' between <>.
  <>, here we define what is expected to be passed. Could be 'string' instead of 'number' 
  
  Could be e.g. ... = new EventEmitter<{name: string, age: number}>();   - here we expect to pass a JS object.
  If we did this, then emit could be something like:
  var p1 = {name: 'Bob', age: 18}
  ... .emit(p1);

*/
