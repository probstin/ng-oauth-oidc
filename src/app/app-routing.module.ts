import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { AuthGuard } from './auth/auth.guard';
import { ProtectedComponent } from './protected/protected.component';
import { PublicComponent } from './public/public.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '', canActivateChild: [AutoLoginAllRoutesGuard], children: [
      { path: '', redirectTo: 'public', pathMatch: 'full' },
      { path: 'public', component: PublicComponent },
      {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthGuard],
        data: {
          roles: ['EXAMPLE_APP_ADMIN']
        }
      },
      { path: 'unauthorized', component: UnauthorizedComponent },
      { path: '**', redirectTo: 'public' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
