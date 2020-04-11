import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EventEmitterService } from '../../../event-emitter/event-emitter.service';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService,  private AuthServ: AuthService) {}

  ngOnInit() {
    this.AuthServ.customObservable.subscribe(( ) => {
        this.signedIn();
      }
    );
  }

  loginComponentOpenModal( ) {
    this.eventEmitterService.onLoginButtonClick();
  }

  signedIn(){
    document.getElementById('cont').innerHTML = 'Profil';
  }
}
