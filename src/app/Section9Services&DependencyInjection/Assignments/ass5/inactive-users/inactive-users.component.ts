import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor(private service: UsersServiceService){}
  
  users: string[];

  onSetToActive(id: number) {
    this.service.setToActive(id);
  }

  ngOnInit(){
    this.users = this.service.inactiveUsers;
  }

}
