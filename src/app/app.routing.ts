import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { HeaderComponent } from './projectmod1/header.component';
import { Projectmod1Component } from './projectmod1/projectmod1.component';
import { RegisterrComponent } from './routing/registerr.component';
import { LoginrComponent } from './routing/loginr.component';
import { ProjindexComponent } from './projectmod1/projindex.component';
import { Routes, RouterModule } from '@angular/router'

const ROUTING_PATH: Routes = [
    { path: '', component: LoginrComponent },
    { path: 'proj/:userName', component: HeaderComponent },
    { path: 'register', component: RegisterrComponent },
    { path: 'sample', component: MyFirstCompComponent }
];

export const routeModule = RouterModule.forRoot(ROUTING_PATH); 
