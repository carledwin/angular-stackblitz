import { Component } from '@angular/core';
import moment from 'moment';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular Stackblitz';
  now = moment().fromNow();
  calendar = moment().calendar();
}

console.log('hello')
