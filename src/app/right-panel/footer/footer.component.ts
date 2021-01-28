import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/users.interfaces';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerHeight: number;
  textareaHeight: number;
  messageText: string;
  isShiftPressed: boolean;
  changeEventObject: any;
  lastFooterHeight: number;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  changeEvent(event: any) {
    this.changeEventObject = event;
    console.log("changeEvent ", event);
    this.messageText = event.target.textContent;
    if (event.target.offsetHeight > 40) {
      this.footerHeight = event.target.offsetHeight + 10;
      this.lastFooterHeight = this.footerHeight;
    } else {
      this.footerHeight = 50;
      this.lastFooterHeight = this.footerHeight;
    }
  }

  blurEvent() {
    if (this.changeEventObject.target.offsetHeight > 40) {
      this.footerHeight = this.changeEventObject.target.offsetHeight + 10;
    } else {
      this.footerHeight = 50;
    }
  }

  clearEvent(event: any) {
    // console.log('clear ', event);
    if (event.keyCode === 16) {
      this.isShiftPressed = false;
    }
    if (event.keyCode === 13 && !this.isShiftPressed) {
      this.sendMessageEvent();
    }
  }

  handleKeyDown(event: any) {
    // console.log('keydown ', event);
    if (event.keyCode === 16) {
      this.isShiftPressed = true;
    }
  }

  sendMessageEvent() {
    const message: Message = {
      userId: "1",
      messages: [
        {
          messageId: "",
          message: this.messageText,
          messageDate: new Date()
        }
      ]
    }
    // console.log('Submit -> ', message);
    this.changeEventObject.target.textContent = null;
    this.usersService.postMessage(message).subscribe((data: Message) => {
      console.log('SOMEDATA from server: ', data);
    });
  }
}
