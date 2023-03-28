import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';

interface DataObject {
  hospitalCnt: number;
  schoolCnt: number;
  bankCnt: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getWidgetOneData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(20);
        observer.complete();
      }, 5000);
    });
  }

  getWidgetTwoData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(30);
        observer.complete();
      }, 3000);
    });
  }

  getWidgetThreeData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(40);
        observer.complete();
      }, 1000);
    });
  }

  getAllData() {
    let observableOne = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(20);
        observer.complete();
      }, 5000);
    });

    let observableTwo = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(30);
        observer.complete();
      }, 3000);
    });

    let observableThree = new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(40);
        observer.complete();
      }, 1000);
    });

    return forkJoin([observableOne, observableTwo, observableThree]);
  }
}
