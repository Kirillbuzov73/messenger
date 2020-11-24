import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, AfterContentInit {
  x: string = 'Hello from child';
  value: number = 0;
  @Input() parentValue: number = 0;
  @Input() observableParentValue: number = 0;
  @Output() onSomething = new EventEmitter;
  @ContentChild("contentFromParent", { static: false })
  content: ElementRef;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.addOne(); // 2
    this.value = this.userService.getVariable(); // 2
    this.onSomething.emit('Hello from inside');
  }

  ngAfterContentInit(): void {
    this.content.nativeElement.textContent = "Hello world!";
  }

}
