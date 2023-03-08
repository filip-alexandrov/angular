import { Component } from '@angular/core';

@Component({
  // target tag of the element to be embedded in (this is index.html heres)
  selector: 'app-root',
  // path to the html file
  templateUrl: './app.component.html',
  // more than 1 css file can be added
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // properties of the component, methods, etc.
  title: string = 'Task Tracker';
}
