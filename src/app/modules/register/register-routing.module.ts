import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { RegisterPageComponent } from './pages/register-page/register-page.component'

export const registerRoutes = [
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(registerRoutes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
