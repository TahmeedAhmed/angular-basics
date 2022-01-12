import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  activeUsersCounter = 0;
  inactiveUsersCounter = 0;

  incrementActiveUsers(){
    this.activeUsersCounter++;
    console.log("inactive to active: " + this.activeUsersCounter)
  }

  incrementInactiveUsers(){
    this.inactiveUsersCounter++;
    console.log("active to inactive: " + this.inactiveUsersCounter)
  }
}

// included this service in app.module.ts so that it can be injected anywhere !
// we are going to inject this into user-service.service.ts
