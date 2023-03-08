import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiblingComponent } from './parent2child/sibling/sibling.component';
import { ParentComponent } from './parent2child/parent/parent.component';
import { ChildComponent } from './parent2child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    SiblingComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
