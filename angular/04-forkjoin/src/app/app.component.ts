import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = '04-forkjoin';
  schoolsCnt = 0;
  hospitalsCnt = 0;
  banksCnt = 0;
  isWidgetOneSpinner = false;
  isWidgetTwoSpinner = false;
  isWidgetThreeSpinner = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isWidgetOneSpinner = true;
    this.isWidgetTwoSpinner = true;
    this.isWidgetThreeSpinner = true;
    this.getData();
  }

  getData() {
    /*  this.dataService.getWidgetOneData().subscribe((data) => {
      this.schoolsCnt = data;
      this.isWidgetOneSpinner = false;
    });

    this.dataService.getWidgetTwoData().subscribe((data) => {
      this.hospitalsCnt = data;
      this.isWidgetTwoSpinner = false;
    });

    this.dataService.getWidgetThreeData().subscribe((data) => {
      this.banksCnt = data;
      this.isWidgetThreeSpinner = false;
    }); */

    // get all data in 1 shot
    this.dataService.getAllData().subscribe((res) => {
      this.schoolsCnt = res[0];
      this.hospitalsCnt = res[1];
      this.banksCnt = res[2];
    });
  }
}
