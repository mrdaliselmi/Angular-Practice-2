import { Component, Input } from '@angular/core';
import { User } from '../../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() users: User[] = [];
}
