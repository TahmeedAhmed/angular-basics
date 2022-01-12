import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test2',
  templateUrl: './input-test2.component.html',
  styleUrls: ['./input-test2.component.css']
})
export class InputTest2Component implements OnInit {

  text = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleInput(input: string){
    this.text = input;
  }

}
