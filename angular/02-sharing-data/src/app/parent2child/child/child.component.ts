import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // @Input() message: string = '';
  message: string = '';
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }

  sendMessage() {
    this.data.changeMessage('Hello from Child');
  }

  /* @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  } */
}
