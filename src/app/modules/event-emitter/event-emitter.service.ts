import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeLoginComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onLoginButtonClick() {
    this.invokeLoginComponentFunction.emit();
  }
}
