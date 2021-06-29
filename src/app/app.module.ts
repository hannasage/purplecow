import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { CountBoxComponent } from './count-box/count-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    CountBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
