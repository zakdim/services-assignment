import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  constructor(private usersService: UsersService) { }

  get inactiveUsers() {
    return this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    // this.inactiveUsers.push(this.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
    this.usersService.setToInactive(id);
  }

  onSetToActive(id: number) {
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
    this.usersService.setToActive(id);
  }
}
