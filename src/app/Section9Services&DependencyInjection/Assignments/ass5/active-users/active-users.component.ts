import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

  constructor(private service: UsersServiceService){}

  users: string[];

  onSetToInactive(id: number) {
    this.service.setToInactive(id);
  }

  ngOnInit(){
    this.users = this.service.activeUsers;
  }
}
