import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding',
  templateUrl: './custom-property-binding.component.html',
  styleUrls: ['./custom-property-binding.component.css']
})
export class CustomPropertyBindingComponent implements OnInit {

  @Input() car: {name: string, colour: string}
  // Could have also done:
  // @Input() car;
  // But the way we did it is being more specific


  constructor() { }

  ngOnInit(): void {
  }

}
/* 
Extra info - Input Alias

If we did '@Input("ghana") car: {name: string, colour: string}' or '@Input("ghana") car'
Then [car] would no longer work when binding. The alias would need to be used, so [ghana] 
*/
