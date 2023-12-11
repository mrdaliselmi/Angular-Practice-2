import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  @Input() usersCluster: string = '';
  @Input() users: User[] = [];
  @Output() add = new EventEmitter<string>();

  userFullName: string = '';

  addUser() {
    if (this.userFullName.trim() === '') return;
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }
}
