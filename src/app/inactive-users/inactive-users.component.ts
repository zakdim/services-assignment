import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  get users() {
    return this.usersService.inactiveUsers;
  }

  get inactiveToActiveCount() {
    return this.usersService.inactiveToActiveCount;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.setToActive(id);
  }
}
