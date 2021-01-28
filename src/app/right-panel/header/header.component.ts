import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
