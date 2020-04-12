import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [NavMenuComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  declarations: [NavMenuComponent, NavbarComponent],
})
export class MainModule {}
