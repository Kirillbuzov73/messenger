import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { User } from 'src/app/users.interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  minimize: any;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.minimize = this.themeService.minimize;
  }
}
