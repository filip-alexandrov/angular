import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '06-trackBy';

  users = [
    { id: 1, name: 'Harry' },
    { id: 2, name: 'Ron' },
    { id: 3, name: 'Hermione' },
    { id: 4, name: 'Draco' },
    { id: 5, name: 'Neville' },
    { id: 6, name: 'Luna' },
  ];

  refresh() {
    this.users = [
      { id: 1, name: 'Harry' },
      { id: 2, name: 'Ron' },
      { id: 3, name: 'Hermione' },
      { id: 4, name: 'Draco' },
      { id: 5, name: 'Hegrid' },
      { id: 6, name: 'Dumbledore' },
    ];
  }

  trackByUser(index: number, item: any) {
    // return index;
    // Unique identifier for the item, only the changed item will be changed in the DOM
    return item.id;
  }
}
