import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {

  text = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleInput(event: Event){
    this.text = (<HTMLInputElement>event.target).value;
    // This weird bit of code is needed (casting) to use the Event Value!
  }

}
