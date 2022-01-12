import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test3',
  templateUrl: './input-test3.component.html',
  styleUrls: ['./input-test3.component.css']
})
export class InputTest3Component implements OnInit {

  text = "";

  constructor() { }

  ngOnInit(): void {
  }

  onType(input: string){
    this.text = input;
  }

  clear(){
    this.text = "";
  }
}
