import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  minimize: any;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.minimize = this.themeService.minimize;
  }

}
