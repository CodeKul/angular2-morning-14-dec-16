import { MyWebService } from './http/my-web.service';
import { WallGuardService } from './projectmod1/wall-guard.service';
import { routeModule } from './app.routing';
import { BridgeService } from './servicecomp/bridge.service';
import { FirstService } from './servicecomp/first.service';
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
import { ServicecompComponent } from './servicecomp/servicecomp.component';
import { ServiceindexComponent } from './servicecomp/serviceindex.component';
import { ImpcompComponent } from './servicecomp/impcomp.component';
import { RoutingComponent } from './routing/routing.component';
import { LoginrComponent } from './routing/loginr.component';
import { RegisterrComponent } from './routing/registerr.component';
import { RouterindexComponent } from './routing/routerindex.component';
import { BasicInfoComponent } from './projectmod1/basic-info.component';
import { WallComponent } from './projectmod1/wall.component';
import { FormsComponent } from './forms/forms.component';
import { TempDrivenComponent } from './forms/temp-driven.component';
import { DataDrivenComponent } from './forms/data-driven.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { MyCurrPipe } from './pipes/my-curr.pipe';
import { OurPipeComponent } from './pipes/our-pipe.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { HttpComponent } from './http/http.component';

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
    DropdownDirective,
    ServicecompComponent,
    ServiceindexComponent,
    ImpcompComponent,
    RoutingComponent,
    LoginrComponent,
    RegisterrComponent,
    RouterindexComponent,
    BasicInfoComponent,
    WallComponent,
    FormsComponent,
    TempDrivenComponent,
    DataDrivenComponent,
    PipesComponent,
    MyCurrPipe,
    OurPipeComponent,
    MyFilterPipe,
    HttpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routeModule,
    ReactiveFormsModule
  ],
  providers: [FirstService,BridgeService,WallGuardService,MyWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
