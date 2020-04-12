import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './helpers/auth.guard'

const routes: Routes = [
  {
    path: 'management',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/management/management.module').then(
        (m) => m.ManagementModule,
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
