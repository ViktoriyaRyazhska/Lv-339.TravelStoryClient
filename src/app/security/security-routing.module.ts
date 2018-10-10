import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const securityModule: Routes = [
  {path: 'login', component: LoginComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(securityModule)
  ],
  declarations: []
})
export class SecurityRoutingModule { }