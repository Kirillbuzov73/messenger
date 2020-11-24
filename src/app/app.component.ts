import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'messenger';
  handleClick(event: Event) {
    console.log("root", event);
  }
  handleSmth(event: Event) {
    console.log("root", event);
  }
}
