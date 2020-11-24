import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.scss']
})
export class MyContentComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().pipe(
      map((users: User[]) => {
        return users.map((user: User) => {
          user.date = new Date(user.date);
          return user;
        });
      })).subscribe((users: User[]) => {
        this.users = users;
      });
  }

}

