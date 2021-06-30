import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { CountBoxComponent } from './count-box/count-box.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    CountBoxComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
