import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  items = [
    {
      name: 'Acasa',
      icon: 'home',
      route: '/',
    },
    {
      name: 'Producatori',
      icon: 'producers',
      route: 'producers',
    },
    {
      name: 'Produse',
      icon: 'products',
      route: 'products',
    },
    {
      name: 'Info',
      icon: 'info',
      route: 'info',
    },
  ]

  constructor(protected router: Router) {}

  ngOnInit() {}

  goToPage(route: string) {
    this.router.navigate([route])
  }
}
