import { OurPipeComponent } from './pipes/our-pipe.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataDrivenComponent } from './forms/data-driven.component';
import { TempDrivenComponent } from './forms/temp-driven.component';
import { WallGuardService } from './projectmod1/wall-guard.service';
import { BasicInfoComponent } from './projectmod1/basic-info.component';
import { WallComponent } from './projectmod1/wall.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { HeaderComponent } from './projectmod1/header.component';
import { Projectmod1Component } from './projectmod1/projectmod1.component';
import { RegisterrComponent } from './routing/registerr.component';
import { LoginrComponent } from './routing/loginr.component';
import { ProjindexComponent } from './projectmod1/projindex.component';
import { Routes, RouterModule } from '@angular/router'

const CHILD_PROJ: Routes = [
    { path: 'wall', component: WallComponent },
    { path: 'info', component: BasicInfoComponent }
];

const ROUTING_PATH: Routes = [
    {path : 'pipes', component : OurPipeComponent},
    {path:'templateDriven', component : TempDrivenComponent},
    {path:'dataDriven', component : DataDrivenComponent},
    { path: '', component: LoginrComponent },
    { path: 'proj/:userName', component: HeaderComponent, canActivate : [WallGuardService] },
    { path: 'proj/:userName', component: HeaderComponent, children: CHILD_PROJ },
    { path: 'register', component: RegisterrComponent },
    { path: 'sample', component: MyFirstCompComponent },
    { path: 'proj', redirectTo: 'proj/android' },
    { path: '**', redirectTo: 'proj/android/info' },
];

export const routeModule = RouterModule.forRoot(ROUTING_PATH); 
