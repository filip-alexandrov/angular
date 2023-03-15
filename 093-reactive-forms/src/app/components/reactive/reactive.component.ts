import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      uname: new FormControl('Default name', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      readTerms: new FormControl(false),
    });
  }
  onSubmit() {
    this.myForm.reset();
  }

  accept() {
    /* this.myForm.setValue({
      uname: 'Default name',
      email: null,
      readTerms: true,
    }); */

    this.myForm.patchValue({
      readTerms: true,
    });
  }
}
