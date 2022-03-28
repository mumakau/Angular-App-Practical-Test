import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheticationGuardGuard } from './helpers/authetication-guard.guard';
import { PostauthLayoutComponent } from './postauth/postauth-layout/postauth-layout.component';
import { PreauthLayoutComponent } from './preauth/preauth-layout/preauth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
   {
    path: 'auth',
    component: PreauthLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./preauth/preauth.module').then(m => m.PreauthModule)

    }]
  },
  {
    path: 'home',
    component: PostauthLayoutComponent,
    canActivate: [AutheticationGuardGuard],
    canLoad: [AutheticationGuardGuard],
    children: [{
      path: '',
      loadChildren: () => import('./postauth/postauth.module').then(m => m.PostauthModule)

    }]
  },
   {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
