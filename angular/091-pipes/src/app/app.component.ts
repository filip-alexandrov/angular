import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  amount = 223.45667;
  channelName = 'WebTechTalk';
  mark = 0.8945;
  today = new Date();
  name = 'Abdul Kalam';
}
