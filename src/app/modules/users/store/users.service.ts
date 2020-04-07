import {Injectable} from '@angular/core';
import {UsersStore, UsersState} from './users.store';
import {CollectionConfig, CollectionService} from 'akita-ng-fire';
import {User} from './user.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
@CollectionConfig({path: 'users'})
export class UsersService extends CollectionService<UsersState> {

  constructor(store: UsersStore,
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
    this.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(u => {
        user.id = u.user.uid;
        this.fireStore.collection('users').doc(u.user.uid).set(user)
          .then(() => {
            this.store.add(user);
            this.router.navigateByUrl('/');
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

}
