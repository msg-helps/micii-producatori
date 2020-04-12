import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { EventEmitterService } from '../event-emitter/event-emitter.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { User } from '../../shared/models/user.model'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private customSubject = new Subject<any>();
  customObservable = this.customSubject.asObservable();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Service message commands
  callComponentMethod() {
    this.customSubject.next();
  }

  signIn(userN, passW) {
    const user = {
     username: userN,
     password: passW
   };
    Auth.signIn(user).then( user => {
     console.log(user);
     localStorage.setItem('currentUser', JSON.stringify(user));
     this.callComponentMethod();
     return user;
   }).catch(err => {
     console.log(err);
   });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
