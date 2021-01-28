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
  minimize: any;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
    });
    this.minimize = this.themeService.minimize;
  }

  handleDragEvent(event: MouseEvent) {
    this.themeService.handleDragEvent(event);
    this.coordinateX = this.themeService.coordinateX;
  }
}
