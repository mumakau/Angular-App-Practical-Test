import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: 'manage_users',
        component: UsersComponent,
      },
      {
        path: 'manage_account',
        component: AccountComponent,

      },
      {
        path: '*',
        redirectTo: '/home/manage_users',
        pathMatch: 'full',

      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostauthRoutingModule { }
