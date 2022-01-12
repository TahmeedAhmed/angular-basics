import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass4',
  templateUrl: './ass4.component.html',
  styleUrls: ['./ass4.component.css']
})
export class Ass4Component implements OnInit {

  //incrementingNumber = 0;
  arrayOfNumbers = [];

  constructor() { }

  incrementNumber(numb){
    //this.incrementingNumber = numb;
    this.arrayOfNumbers.push(numb)
  }

  ngOnInit(): void {
  }

}
