import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing';
  message='Hello Jasmine';
  ChangeMessage(msg:string):string
  {
    this.message=msg;
    return this.message;
  }
}
