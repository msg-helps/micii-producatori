import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NavMenuComponent } from './components/nav-menu/nav-menu.component'

@NgModule({
  exports: [NavMenuComponent],
  imports: [CommonModule, RouterModule],
  declarations: [NavMenuComponent],
})
export class MainModule {}
