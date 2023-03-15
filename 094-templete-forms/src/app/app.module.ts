import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TemplateDrivenComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
