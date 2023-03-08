import { Component } from '@angular/core';
import { LazyChildComponent } from '../lazy-child/lazy-child.component';

@Component({
  selector: 'app-lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrls: ['./lazy-parent.component.css'],
})
export class LazyParentComponent {}
