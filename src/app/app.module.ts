import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightPanelComponent } from './right-panel/right-panel.component';//right 1
import { HeaderComponent } from './right-panel/header/header.component';//right 2
import { BodyComponent } from './right-panel/body/body.component';//right 3
import { FooterComponent } from './right-panel/footer/footer.component';//right 4
import { LeftPanelComponent } from './left-panel/left-panel.component';//left 1
import { GroupBoxComponent } from './left-panel/group-box/group-box.component';//left 2
import { UserCardComponent } from './left-panel/group-box/user-card/user-card.component';//left 3
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { MenuComponent } from './left-panel/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent, //left 1
    GroupBoxComponent, //left 2
    UserCardComponent, //left 3
    RightPanelComponent, //right 1
    HeaderComponent, //right 2
    BodyComponent, //right 3
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
