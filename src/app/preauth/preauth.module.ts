import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { PreauthRoutingModule } from './preauth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PreauthLayoutComponent } from './preauth-layout/preauth-layout.component';
import { AuthnavComponent } from '../common/authnav/authnav.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthnavComponent,
    PreauthLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PreauthRoutingModule
  ]
})
export class PreauthModule { }
