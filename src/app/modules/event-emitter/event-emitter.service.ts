import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeLoginComponentFunction = new EventEmitter();
  invokeSigninFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onLoginButtonClick() {
    this.invokeLoginComponentFunction.emit();
  }

  onSignIn(){
    this.invokeSigninFunction.emit();
  }
}
