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
      console.log('getUsers(): ', this.usersData);
    })
  }

  postData() {
    const user: User = {
      id: "20",
      pictureUrl: "https://i.pinimg.com/originals/23/f1/04/23f104571baadff503d0686bda74f443.jpg",
      pictureAlt: "wolf",
      userName: "Ololo",
      lastMessage: {
        messageAuthor: "Author",
        messageText: "Privet",
        messageDate: "Date",
        readStatus: "assets/images/check.svg"
      }
    };
    this.usersService.postData(user).subscribe((data: User[]) => {
      this.usersData = data;
    })
  }
}
