import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-guard2',
  templateUrl: './route-guard2.component.html',
  styleUrls: ['./route-guard2.component.css'],
})
export class RouteGuard2Component {
  constructor(private router: Router) {}
}
