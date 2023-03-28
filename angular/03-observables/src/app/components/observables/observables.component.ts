import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  data: number[] = [];
  count = 0;
  myObservable!: Observable<number[]>;

  ngOnInit(): void {
    this.myObservable = new Observable((observer) => {
      setInterval(() => {
        this.count++;

        if (this.count < 5) {
          this.data.push(this.count);
          observer.next(this.data);
        } else {
          observer.complete();
        }
      }, 1000);
    });
  }

  getData() {
    // only starts counting after subscribe is called
    this.myObservable.subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
