import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  @ViewChild('myForm', { static: true }) myForm!: NgForm;

  onSubmit(myForm: NgForm) {
    console.log(myForm);
    this.myForm.reset();
  }
}
