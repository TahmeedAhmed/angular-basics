import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementNumberEvent = new EventEmitter<number>();

  incrementingNumber = 0;
  intervalRef;

  constructor() { }

  ngOnInit(): void {
  }

  startClicked(){
    this.intervalRef = setInterval(()=> {
      this.incrementingNumber++;
      this.incrementNumberEvent.emit(this.incrementingNumber)
    }, 1000)
  }

  stopClicked(){
    clearInterval(this.intervalRef)
  }

}
