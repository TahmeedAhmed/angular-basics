import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  templateUrl: './custom-event-binding.component.html',
  styleUrls: ['./custom-event-binding.component.css']
})
export class CustomEventBindingComponent implements OnInit {

  @Output() incrementExternalVarEvent = new EventEmitter<{}>();

  constructor() { }
  ngOnInit(): void {
  }

  buttonClicked(){
    this.incrementExternalVarEvent.emit();
  }
}

/*
  @Output() incrementExternalVarEvent = new EventEmitter<{}>();
  This line is declaring this as an event which will be emitted to the parent component rendering this component.

  this.incrementExternalVarEvent.emit();
  This line is basically triggering that event we defined. And the parent component that renders this component 
  AND binds to this event will be notified that the event has taken place. Then the parent component can do what 
  it wants
  In this case, the emit method is called when our button in THIS component is clicked.


  Can also add alias e.g. Output('ghana'), which would then need to be used!
  

*/
