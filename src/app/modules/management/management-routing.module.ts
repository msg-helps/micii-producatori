import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ManagementComponent } from './pages/management-page/management.component'

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
