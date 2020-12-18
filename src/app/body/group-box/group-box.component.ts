import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users.interfaces';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.scss']
})
export class GroupBoxComponent implements OnInit {
  usersData: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response: User[]) => {
      this.usersData = response;
      console.log('UUUUUUUU ', this.usersData);
    })
  }

}
