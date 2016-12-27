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
import { IntercompcommComponent } from './intercompcomm/intercompcomm.component';
import { BtnpannelComponent } from './intercompcomm/btnpannel.component';
import { ImgpannelComponent } from './intercompcomm/imgpannel.component';
import { ProjectionsComponent } from './projections/projections.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ProjectionindexComponent } from './projections/projectionindex.component';
import { LifecycleindexComponent } from './lifecycle/lifecycleindex.component';
import { Projectmod1Component } from './projectmod1/projectmod1.component';
import { HeaderComponent } from './projectmod1/header.component';
import { LeftmenuComponent } from './projectmod1/leftmenu.component';
import { MaincontentComponent } from './projectmod1/maincontent.component';
import { ProjindexComponent } from './projectmod1/projindex.component';
import { DircompComponent } from './dircomp/dircomp.component';
import { AttrdirComponent } from './dircomp/attrdir.component';
import { ResizerDirective } from './dircomp/resizer.directive';
import { OwnstrDirective } from './dircomp/ownstr.directive';
import { DropdownDirective } from './projectmod1/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    FlatcompComponent,
    DatabindingComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DemoexampleComponent,
    IntercompcommComponent,
    BtnpannelComponent,
    ImgpannelComponent,
    ProjectionsComponent,
    LifecycleComponent,
    ProjectionindexComponent,
    LifecycleindexComponent,
    Projectmod1Component,
    HeaderComponent,
    LeftmenuComponent,
    MaincontentComponent,
    ProjindexComponent,
    DircompComponent,
    AttrdirComponent,
    ResizerDirective,
    OwnstrDirective,
    DropdownDirective
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
