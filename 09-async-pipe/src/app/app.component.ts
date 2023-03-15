import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '09-async-pipe';

  countries: string[] = [];
  status = false;
  section = 'country';

  countriesObs: any;
  statusProm: any;

  constructor(private dataService: DataService) {}

  getCountries() {
    this.section = 'country';
    /* this.dataService.getCountries().subscribe((res: string[]) => {
      this.countries = res;
    }); */

    this.countriesObs = this.dataService.getCountries();
  }

  getStatus() {
    this.section = 'status';
    this.status = false;
    /* this.dataService.getStatus().then((res: boolean) => {
      this.status = res;
    }); */

    this.statusProm = this.dataService.getStatus();
  }
}
