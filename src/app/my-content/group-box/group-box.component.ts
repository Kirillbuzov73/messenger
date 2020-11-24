import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/user.service';

@Component({
  selector: 'app-group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.scss']
})
export class GroupBoxComponent implements OnInit {
  _user: User;
  @Input() set user(user: User) {
    this._user = user;
    console.log(user)
    console.log(user.date instanceof Date)
  }

  get user() {
    return this._user;
  }

  constructor() {
    this._user = this.user;
  }

  ngOnInit(): void {

  }

}
