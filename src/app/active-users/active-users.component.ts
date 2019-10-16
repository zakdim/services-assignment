import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private usersService: UsersService) {}

  get users() {
    return this.usersService.activeUsers;
  }

  get activeToInactiveCount() {
    return this.usersService.activeToInactiveCount;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
