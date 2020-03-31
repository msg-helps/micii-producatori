import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  goToPage(pageLink: string) {
    this.router.navigate([pageLink]);
  }
}