import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-guard1',
  templateUrl: './route-guard1.component.html',
  styleUrls: ['./route-guard1.component.css'],
})
export class RouteGuard1Component {
  constructor(private router: Router) {}
}
