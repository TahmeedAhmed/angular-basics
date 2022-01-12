import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['./ass2.component.css']
})
export class Ass2Component implements OnInit {

  username = "";
  disableButton = true;
  
  constructor() { }

  handleInput(){
    this.username == "" ? this.disableButton = true : this.disableButton = false;
  }

  buttonClicked(){
    this.username = "";
    this.disableButton = true;
  }

  ngOnInit(): void {
  }

}
