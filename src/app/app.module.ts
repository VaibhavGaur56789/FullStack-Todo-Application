import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

//Every Angular component (@Component) has to be associated with an Angular Module (@NgModule).

@NgModule({ //specify component part of @NgModule NgModule ---> Angular Module
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  //mandatory for ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }