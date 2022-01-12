import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child2',
  templateUrl: './test-child2.component.html',
  styleUrls: ['./test-child2.component.css']
})
export class TestChild2Component implements OnInit {
  
  enableButton = false;
  printOut = "";
  
  constructor() {
    setTimeout(()=>{
      this.enableButton = true
    }, 2000)
   }

  ngOnInit(): void {
  }

  buttonClicked(){
    this.printOut = "button has been clicked";
  }

}
