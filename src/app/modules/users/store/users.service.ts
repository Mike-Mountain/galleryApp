import {Injectable} from '@angular/core';
import {UsersStore, UsersState} from './users.store';
import {CollectionConfig, CollectionService} from 'akita-ng-fire';
import {User} from './user.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {SessionService} from '../../../shared/stores/session/session.service';
import {SessionStore} from '../../../shared/stores/session/session.store';
import {from} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
@CollectionConfig({path: 'users'})
export class UsersService extends CollectionService<UsersState> {

  constructor(store: UsersStore,
              private sessionStore: SessionStore,
              private auth: AngularFireAuth,
              private fireStore: AngularFirestore,
              private router: Router) {
    super(store);
  }

  register(credentials: { email, password, username }) {
    const user: User = {
      id: '',
      username: credentials.username,
      email: credentials.email,
      role: ['Admin']
    };
    return from(this.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      tap((u) => {
        user.id = u.user.uid;
        this.fireStore.collection('users').doc(u.user.uid).set(user)
          .then(() => {
            this.store.add(user);
            this.sessionStore.update({user, token: u.user.refreshToken});
            this.router.navigateByUrl('/');
          });
      })
    );
  }

}
