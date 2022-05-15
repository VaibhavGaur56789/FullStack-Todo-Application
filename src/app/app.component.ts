import { Component } from '@angular/core';

@Component({ //decarator same as annotation
  selector: 'app-root', //tag name
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}<h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'A Simple App :-)';
}

