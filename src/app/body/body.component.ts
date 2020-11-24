import { delay, map } from 'rxjs/operators';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User, UserService } from '../user.service';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  value: number = 0;
  dynamicValue: number = 0;
  @Output() onSomething = new EventEmitter;
  @ViewChild(MainContentComponent, { static: false })
  private childComponent: MainContentComponent;

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

    this.userService.addOne();// 1
    this.value = this.userService.getVariable(); // 1
    this.userService.getVariable$().pipe(delay(0)).subscribe((value: number) => {
      this.dynamicValue = value;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.childComponent.x = "modified from parent";
    }, 0);
  }
  handleClick(event: Event) {
    console.log(event);
    event.stopPropagation();
  }
  handleSmth(event: Event) {
    this.onSomething.emit(event);
    console.log(event);
  }

}

