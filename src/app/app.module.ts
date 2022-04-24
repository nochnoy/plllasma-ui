import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClientModule } from "@angular/common/http";
import { ForumPageComponent } from './pages/forum-page/forum-page.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    ForumPageComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
