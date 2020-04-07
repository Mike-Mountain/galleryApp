import {Injectable} from '@angular/core';
import {SessionStore} from './session.store';
import {AngularFireAuth} from '@angular/fire/auth';
import {from} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UsersService} from '../../../modules/users/store/users.service';

@Injectable({providedIn: 'root'})
export class SessionService {

  constructor(private sessionStore: SessionStore,
              private userService: UsersService,
              private auth: AngularFireAuth) {
  }

  login(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      tap(session => {
        this.userService.getValue(session.user.uid).then(user => {
          this.sessionStore.login({
            user,
            token: session.user.refreshToken
          });
        });
      })
    );
  }

  logout() {
    this.sessionStore.logout();
  }
}
