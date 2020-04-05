import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EventEmitterService } from '../../../event-emitter/event-emitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private eventEmitterService: EventEmitterService) {}

  loginComponentOpenModal( ) {
    this.eventEmitterService.onLoginButtonClick();
  }
}
