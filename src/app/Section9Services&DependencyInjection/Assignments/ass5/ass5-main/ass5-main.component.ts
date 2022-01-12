import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-ass5-main',
  templateUrl: './ass5-main.component.html',
  styleUrls: ['./ass5-main.component.css'],
  providers: [UsersServiceService]
})
export class Ass5MainComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}
