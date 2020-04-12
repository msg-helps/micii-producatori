import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EventEmitterService } from '../../../event-emitter/event-emitter.service';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('template', {static: false}) templateRef: TemplateRef<any>;

  constructor(private modalService: BsModalService, private eventEmitterService: EventEmitterService, private AuthServ: AuthService ) {}

  ngOnInit() {
    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeLoginComponentFunction.subscribe((name: string) => {
        this.openModal();
      });
    }
  }

  openModal( ) {
    this.modalRef = this.modalService.show(this.templateRef);
  }

  signIn(event) {
    event.preventDefault( );
    const target = event.target;
    const username = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    this.modalRef.hide();
    this.AuthServ.signIn(username, password);
  }

}
