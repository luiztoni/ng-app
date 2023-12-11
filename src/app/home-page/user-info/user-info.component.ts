import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  @Input() user: User = {name:'', age:0}; // decorate the property with @Input()
  @Output() changeNameEvent = new EventEmitter<string>();
  changeName(value: string) {
    this.changeNameEvent.emit(value);
  }
}
