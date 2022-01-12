import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {

  showString = false;
  numberOfClicks = 0;
  arrayOfClicks = [];
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.showString = !this.showString;
    this.numberOfClicks++;
    this.arrayOfClicks.push(this.numberOfClicks);
  }
}
