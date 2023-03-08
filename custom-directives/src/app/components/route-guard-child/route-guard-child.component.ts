import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-guard-child',
  templateUrl: './route-guard-child.component.html',
  styleUrls: ['./route-guard-child.component.css'],
})
export class RouteGuardChildComponent {
  constructor(private router: Router) {}
}
