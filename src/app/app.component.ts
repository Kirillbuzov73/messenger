import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean;
  coordinateX: string;
  isMinimize: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
    });
  }

  dragEvent(event: MouseEvent) {
    if (event.clientX % 5 === 0 && event.clientX > 50) {
      this.coordinateX = event.clientX.toString();
      this.isMinimize = false;
      this.themeService.coordinateX = this.coordinateX;
    } else if (event.clientX && event.clientX <= 50) {
      this.isMinimize = true;
    }
  }
}
