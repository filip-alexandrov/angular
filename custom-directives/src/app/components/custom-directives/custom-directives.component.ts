import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css'],
})
export class CustomDirectivesComponent {
  number: number = 50;

  isClicked: boolean = false;

  onClick() {
    this.isClicked = true;
  }
}
