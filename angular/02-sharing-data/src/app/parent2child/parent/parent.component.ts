import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  /* message = 'Hello from Parent'; */
  /* message = '';
  receiveMessage($event: string) {
    this.message = $event;
  } */
  // child to parent, all attributes and function accessible
  /* message = '';
  @ViewChild(ChildComponent) child!: ChildComponent;

  ngAfterViewInit(): void {
    this.message = this.child.message;
  } */

  message: string = '';
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}
