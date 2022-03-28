import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PostauthRoutingModule } from './postauth-routing.module';
import { UsersComponent } from './users/users.component';
import { PostauthLayoutComponent } from './postauth-layout/postauth-layout.component';
import { NavbarComponent} from '../common/navbar/navbar.component';
import {  FooterComponent } from '../common/footer/footer.component';
import { SidemenuComponent } from '../common/sidemenu/sidemenu.component';
import { HomeComponent } from './home/home.component';
import { CreateusermodalComponent } from './createusermodal/createusermodal.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import {AccountComponent} from './account/account.component';






@NgModule({
  declarations: [
    UsersComponent,
    NavbarComponent,
    FooterComponent,
    SidemenuComponent,
    AccountComponent,
    PostauthLayoutComponent,
    CreateusermodalComponent,
    ViewuserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PostauthRoutingModule
  ], exports: [FooterComponent]
})
export class PostauthModule { }
