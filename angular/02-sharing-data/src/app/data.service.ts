import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    // Notifies all subscribers about the change
    this.messageSource.next(message);
  }
}
