import {Injectable} from '@angular/core';
import {SessionStore} from './session.store';
import {AngularFireAuth} from '@angular/fire/auth';
import {from} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SessionService {

  constructor(private sessionStore: SessionStore,
              private auth: AngularFireAuth) {
  }

  login(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      tap(session => {
        session.user.getIdToken().then(token => {
          this.sessionStore.login({
            token,
            user: session.user
          });
        });
      })
    );
  }

  logout() {
    this.sessionStore.logout();
  }
}
