import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyContentComponent } from './my-content/my-content.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { GroupBoxComponent } from './my-content/group-box/group-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyContentComponent,
    MyFooterComponent,
    GroupBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
