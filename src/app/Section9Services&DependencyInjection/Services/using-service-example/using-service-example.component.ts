import { Component, OnInit } from '@angular/core';
import { GhanaService } from '../ghana.service';

@Component({
  selector: 'app-using-service-example',
  templateUrl: './using-service-example.component.html',
  styleUrls: ['./using-service-example.component.css'],
  providers: [GhanaService]
})
export class UsingServiceExampleComponent implements OnInit {

  stringToDisplay: string = "";

  constructor(private ghanaService: GhanaService) { }


  ngOnInit(): void {
    this.stringToDisplay = this.ghanaService.returnSomething();
  }

}

// we use Services in a wierd way by adding it to 'Providers' and 
// defining it in the Constructor 

// We can just make an instance of the Service class e.g. const service = new GhanaService()
// but this is not good to do for some reason



/* 
  constructor(private ghanaService: GhanaService) { }

  is a shortcut for:

  private ghanaService: GhanaService;

  constructor(gS: GhanaService) { 
    this.ghanaService = gS;
  }
  
*/