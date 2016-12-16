import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FlatcompComponent } from './my-first-comp/flatcomp.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertybindingComponent } from './databinding/propertybinding.component';
import { EventbindingComponent } from './databinding/eventbinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding.component';
import { DemoexampleComponent } from './databinding/demoexample.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    FlatcompComponent,
    DatabindingComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DemoexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
