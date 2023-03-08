import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-guard3',
  templateUrl: './route-guard3.component.html',
  styleUrls: ['./route-guard3.component.css'],
})
export class RouteGuard3Component {
  constructor(private router: Router) {}
}
